import React from "react";
import { useState } from "react";
// import { supabase } from './supabaseClient'
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <Box
    component="div"
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        width: '100%',
        maxWidth: '400px',
        padding: '24px',
        boxShadow: 3,
        borderRadius: '8px',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Log in to access your content
      </Typography>
      <Typography variant="body1" align="center" marginBottom="24px">
        Log in via magic link with your email below
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        type="email"
        placeholder="Your email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        sx={{ marginBottom: '16px' }}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
        sx={{ height: '48px' }}
      >
        {loading ? 'Loading...' : 'Send magic link'}
      </Button>
    </Box>
  </Box>
);
}
