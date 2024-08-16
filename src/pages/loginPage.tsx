import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
  Paper,
} from "@mui/material";
import { supabaseClient } from "../components/config/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    try {
      const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) throw error;
      const redirectTo = localStorage.getItem('redirectAfterLogin') || "/";
      navigate(redirectTo);
    } catch (err) {
      const error = err as { error_description?: string; message?: string };
      setErrorMessage(error.error_description || error.message || "An unknown error occurred");
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      component="div"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        component="form"
        onSubmit={handleLogin}
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: "24px",
          boxShadow: 3,
          borderRadius: "8px",
        }}
      >
        {!session ? (
          <>
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <Typography variant="body1" align="center" marginBottom="24px">
              Log in to access protected pages
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              type="email"
              label="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: "16px" }}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              label="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: "16px" }}
            />
            {errorMessage && (
              <Typography variant="body2" color="error" sx={{ marginBottom: "16px" }}>
                {errorMessage}
              </Typography>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              sx={{ height: "48px" }}
            >
              Login
            </Button>
          </>
        ) : null}
      </Paper>
    </Box>
  );
}
