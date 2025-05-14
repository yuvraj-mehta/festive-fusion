import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  useTheme,
  Paper,
  CircularProgress,
} from "@mui/material";
import {
  CalendarMonth as CalendarIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
} from "@mui/icons-material";
import Layout from "../components/Layout";
import { Festival } from "../types";
import { festivalsApi } from "../services/api";

const UpcomingFestivals: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFestivals = async () => {
      try {
        setLoading(true);
        const data = await festivalsApi.getUpcoming();
        setFestivals(data);
      } catch (err) {
        setError("Failed to load upcoming festivals");
        console.error("Error loading festivals:", err);
      } finally {
        setLoading(false);
      }
    };

    loadFestivals();
  }, []);

  if (loading) {
    return (
      <Layout>
        <Container sx={{ py: 8, textAlign: "center" }}>
          <CircularProgress />
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container sx={{ py: 8 }}>
          <Typography color="error" variant="h6">
            {error}
          </Typography>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            py: 8,
            textAlign: "center",
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            borderRadius: 4,
            color: "white",
            mb: 6,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Upcoming Festivals
          </Typography>
          <Typography
            variant="h5"
            sx={{ maxWidth: 800, mx: "auto", opacity: 0.9 }}
          >
            Plan your cultural journey with our comprehensive calendar of
            upcoming festivals across India
          </Typography>
        </Box>

        {/* Calendar Overview */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 6,
            borderRadius: 4,
            background: theme.palette.background.paper,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <CalendarIcon color="primary" sx={{ fontSize: 32, mr: 2 }} />
            <Typography variant="h4" color="primary">
              Festival Calendar
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {["January", "February", "March", "April", "May", "June"].map(
              (month) => (
                <Grid item xs={6} sm={4} md={2} key={month}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 2,
                      textAlign: "center",
                      borderRadius: 2,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                      },
                    }}
                  >
                    <Typography variant="h6">{month}</Typography>
                  </Paper>
                </Grid>
              )
            )}
          </Grid>
        </Paper>

        {/* Upcoming Festivals List */}
        <Typography variant="h3" gutterBottom color="primary" sx={{ mb: 4 }}>
          Featured Upcoming Festivals
        </Typography>
        <Grid container spacing={4}>
          {festivals.map((festival) => (
            <Grid item xs={12} md={6} key={festival.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
                onClick={() => navigate(`/festival/${festival.id}`)}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", md: 200 },
                    height: { xs: 200, md: "auto" },
                  }}
                  image={festival.images[0].url}
                  alt={festival.name}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" gutterBottom color="primary">
                    {festival.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {festival.description}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CalendarIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {`${festival.startDate} - ${festival.endDate}`}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <LocationIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {`${festival.location.city}, ${festival.location.state}`}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <TimeIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      Best Time: {festival.touristInfo.bestTimeToVisit}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {festival.localExperiences.map((experience, index) => (
                      <Chip
                        key={index}
                        label={experience.name}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            textAlign: "center",
            background: theme.palette.background.paper,
            borderRadius: 4,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" gutterBottom color="primary">
            Want to Stay Updated?
          </Typography>
          <Typography variant="body1" paragraph>
            Subscribe to our newsletter to receive updates about upcoming
            festivals and special events.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default UpcomingFestivals;
