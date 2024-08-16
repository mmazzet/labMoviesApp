import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
  IconButton,
  Paper,
} from "@mui/material";
import { supabaseClient } from "../components/config/supabaseClient";
import { Session } from "@supabase/supabase-js";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      navigate("/");
    } catch (err) {
      alert(err.error_description || err.message);
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
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
              Log in with your email and password below
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
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              sx={{ height: "48px" }}
            >
              Sign in
            </Button>
          </>
        ) : (
          <Box textAlign="center">
            <Typography variant="h6">
              Welcome back {session.user?.email}
            </Typography>
            <IconButton
              size="large"
              color="primary"
              onClick={handleLogout}
              sx={{ marginTop: "16px" }}
            >
              <PowerSettingsNewIcon />
            </IconButton>
          </Box>
        )}
      </Paper>
    </Box>
  );
}