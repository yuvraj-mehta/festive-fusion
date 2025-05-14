import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Chip,
  Button,
  CircularProgress,
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  Event as EventIcon,
  Info as InfoIcon,
  WbSunny as WeatherIcon,
} from "@mui/icons-material";
import Layout from "../components/Layout";
import PlanVisitModal from "../components/PlanVisitModal";
import { Festival } from "../types";
import { festivalsApi } from "../services/api";

const FestivalDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [festival, setFestival] = useState<Festival | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPlanningModalOpen, setIsPlanningModalOpen] = useState(false);

  useEffect(() => {
    const loadFestival = async () => {
      try {
        setLoading(true);
        const data = await festivalsApi.getById(Number(id));
        setFestival(data);
      } catch (err) {
        setError("Failed to load festival details");
        console.error("Error loading festival:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadFestival();
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <Container sx={{ py: 8, textAlign: "center" }}>
          <CircularProgress />
        </Container>
      </Layout>
    );
  }

  if (error || !festival) {
    return (
      <Layout>
        <Container sx={{ py: 8 }}>
          <Typography color="error" variant="h6">
            {error || "Festival not found"}
          </Typography>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h4" gutterBottom>
                {festival.name}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <Chip
                  icon={<LocationIcon />}
                  label={`${festival.location.city}, ${festival.location.state}`}
                />
                <Chip
                  icon={<EventIcon />}
                  label={`${festival.startDate} - ${festival.endDate}`}
                />
                <Chip label={festival.type} color="primary" />
              </Box>
              <Typography variant="body1" paragraph>
                {festival.description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Cultural Significance
              </Typography>
              <Typography variant="body1" paragraph>
                {festival.culturalSignificance}
              </Typography>
            </Paper>

            {/* Local Experiences */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Local Experiences
              </Typography>
              <Grid container spacing={2}>
                {festival.localExperiences.map((experience, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper elevation={2} sx={{ p: 2 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {experience.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {experience.description}
                      </Typography>
                      <Chip
                        size="small"
                        label={experience.type}
                        sx={{ mt: 1 }}
                      />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Tourist Info */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Tourist Information
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="body2">
                  <strong>Crowd Level:</strong>{" "}
                  {festival.touristInfo.crowdLevel}
                </Typography>
                <Typography variant="body2">
                  <strong>Budget Level:</strong>{" "}
                  {festival.touristInfo.budgetLevel}
                </Typography>
                <Typography variant="body2">
                  <strong>Best Time to Visit:</strong>{" "}
                  {festival.touristInfo.bestTimeToVisit}
                </Typography>
                <Typography variant="body2">
                  <strong>Accessibility:</strong>{" "}
                  {festival.touristInfo.accessibility}
                </Typography>
              </Box>
            </Paper>

            {/* Weather Info */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Weather Conditions
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="body2">
                  <strong>Temperature:</strong>{" "}
                  {festival.weatherConditions.temperature.min}°C -{" "}
                  {festival.weatherConditions.temperature.max}°C
                </Typography>
                <Typography variant="body2">
                  <strong>Rainfall:</strong>{" "}
                  {festival.weatherConditions.rainfall}mm
                </Typography>
                <Typography variant="body2">
                  <strong>Humidity:</strong>{" "}
                  {festival.weatherConditions.humidity}%
                </Typography>
              </Box>
            </Paper>

            {/* Plan Visit Button */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={() => setIsPlanningModalOpen(true)}
              sx={{ mt: 2 }}
            >
              Plan Your Visit
            </Button>
          </Grid>
        </Grid>

        {/* Plan Visit Modal */}
        <PlanVisitModal
          open={isPlanningModalOpen}
          onClose={() => setIsPlanningModalOpen(false)}
          festival={festival}
          onSuccess={() => setIsPlanningModalOpen(false)}
        />
      </Container>
    </Layout>
  );
};

export default FestivalDetails;
