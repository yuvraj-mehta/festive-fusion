import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(formData.email, formData.password);
      navigate("/profile");
    } catch (err: any) {
      setError(err.message || "Failed to login");
    }
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 8,
            mb: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              width: "100%",
              borderRadius: 2,
            }}
          >
            <Typography component="h1" variant="h5" align="center" gutterBottom>
              Login to FestiveFusion
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Don't have an account?
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate("/register")}
                  sx={{ mt: 1 }}
                >
                  Create Account
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};

export default Login;
