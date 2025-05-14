import React, { useState } from "react";
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
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Explore as ExploreIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
} from "@mui/icons-material";
import Layout from "../components/Layout";
import PlanVisitModal from "../components/PlanVisitModal";
import { Festival } from "../types";

// Sample hidden gems data
const hiddenGems: Festival[] = [
  {
    id: 1,
    name: "Hornbill Festival",
    description:
      "A lesser-known celebration of Naga culture in Nagaland, featuring tribal dances, music, and traditional games. This festival showcases the rich heritage of 16 major Naga tribes.",
    region: "Nagaland",
    type: "tribal",
    startDate: "2024-12-01",
    endDate: "2024-12-10",
    location: {
      city: "Kisama",
      state: "Nagaland",
      coordinates: {
        latitude: 25.6568,
        longitude: 94.1053,
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        caption: "Hornbill Festival celebration",
      },
    ],
    culturalSignificance: "Celebrates the cultural heritage of Naga tribes",
    touristInfo: {
      crowdLevel: "medium",
      budgetLevel: "moderate",
      bestTimeToVisit: "December",
      accessibility: "Moderate - requires some travel planning",
    },
    localExperiences: [
      {
        name: "Tribal Dances",
        description: "Traditional tribal dance performances",
        type: "cultural-activity",
      },
      {
        name: "Food Festival",
        description: "Traditional Naga cuisine tasting",
        type: "culinary-experience",
      },
    ],
    weatherConditions: {
      temperature: {
        min: 15,
        max: 25,
      },
      rainfall: 10,
      humidity: 65,
    },
    isHiddenGem: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Ziro Festival of Music",
    description:
      "An independent music festival set in the picturesque Ziro Valley of Arunachal Pradesh. It's a unique blend of contemporary music and tribal culture.",
    region: "Arunachal Pradesh",
    type: "tribal",
    startDate: "2024-09-15",
    endDate: "2024-09-18",
    location: {
      city: "Ziro Valley",
      state: "Arunachal Pradesh",
      coordinates: {
        latitude: 27.533,
        longitude: 93.832,
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        caption: "Ziro Music Festival",
      },
    ],
    culturalSignificance: "Promotes independent music and tribal culture",
    touristInfo: {
      crowdLevel: "medium",
      budgetLevel: "moderate",
      bestTimeToVisit: "September",
      accessibility: "Moderate - requires travel planning",
    },
    localExperiences: [
      {
        name: "Live Music",
        description: "Contemporary and traditional music performances",
        type: "performance-art",
      },
      {
        name: "Local Food",
        description: "Traditional Arunachali cuisine",
        type: "culinary-experience",
      },
      {
        name: "Camping",
        description: "Stay in traditional bamboo huts",
        type: "accommodation-experience",
      },
    ],
    weatherConditions: {
      temperature: {
        min: 18,
        max: 28,
      },
      rainfall: 15,
      humidity: 70,
    },
    isHiddenGem: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Sindhu Darshan Festival",
    description:
      "A unique festival in Ladakh that celebrates the River Indus (Sindhu) and promotes national integration. The festival features cultural performances and a symbolic offering of water from different rivers of India.",
    region: "Ladakh",
    type: "religious",
    startDate: "2024-06-12",
    endDate: "2024-06-14",
    location: {
      city: "Leh",
      state: "Ladakh",
      coordinates: {
        latitude: 34.1526,
        longitude: 77.5771,
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        caption: "Sindhu Darshan Festival",
      },
    ],
    culturalSignificance:
      "Celebrates the River Indus and promotes national integration",
    touristInfo: {
      crowdLevel: "medium",
      budgetLevel: "moderate",
      bestTimeToVisit: "June",
      accessibility: "Challenging - high altitude location",
    },
    localExperiences: [
      {
        name: "River Ceremony",
        description: "Traditional water offering ceremony",
        type: "religious-ritual",
      },
      {
        name: "Cultural Shows",
        description: "Traditional Ladakhi performances",
        type: "performance-art",
      },
    ],
    weatherConditions: {
      temperature: {
        min: 10,
        max: 25,
      },
      rainfall: 5,
      humidity: 40,
    },
    isHiddenGem: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Chapchar Kut",
    description:
      "A spring festival of the Mizo people in Mizoram, celebrating the completion of jhum (shifting cultivation) and the beginning of a new agricultural cycle.",
    region: "Mizoram",
    type: "harvest",
    startDate: "2024-03-01",
    endDate: "2024-03-02",
    location: {
      city: "Aizawl",
      state: "Mizoram",
      coordinates: {
        latitude: 23.7307,
        longitude: 92.7173,
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        caption: "Chapchar Kut celebrations",
      },
    ],
    culturalSignificance: "Celebrates the beginning of the agricultural season",
    touristInfo: {
      crowdLevel: "high",
      budgetLevel: "budget",
      bestTimeToVisit: "March",
      accessibility: "Moderate - hilly terrain",
    },
    localExperiences: [
      {
        name: "Traditional Dances",
        description: "Cheraw and other traditional dances",
        type: "performance-art",
      },
      {
        name: "Local Cuisine",
        description: "Traditional Mizo festival food",
        type: "culinary-experience",
      },
    ],
    weatherConditions: {
      temperature: {
        min: 20,
        max: 30,
      },
      rainfall: 8,
      humidity: 60,
    },
    isHiddenGem: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const HiddenGems: React.FC = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(
    null
  );
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleOpenModal = (festival: Festival) => {
    setSelectedFestival(festival);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedFestival(null);
  };

  const handlePlanSuccess = () => {
    setSnackbar({
      open: true,
      message:
        "Thank you for your interest! Your visit has been planned successfully.",
      severity: "success",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

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
            Hidden Gems
          </Typography>
          <Typography
            variant="h5"
            sx={{ maxWidth: 800, mx: "auto", opacity: 0.9 }}
          >
            Discover lesser-known but culturally rich festivals that showcase
            India's diverse heritage
          </Typography>
        </Box>

        {/* Introduction */}
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
            <ExploreIcon color="primary" sx={{ fontSize: 32, mr: 2 }} />
            <Typography variant="h4" color="primary">
              Off the Beaten Path
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Beyond the well-known festivals, India is home to numerous hidden
            gems that offer unique cultural experiences. These lesser-known
            celebrations provide an authentic glimpse into the diverse
            traditions and customs of different regions.
          </Typography>
          <Typography variant="body1">
            From tribal festivals in the Northeast to harvest celebrations in
            the South, each hidden gem tells a unique story of India's rich
            cultural tapestry.
          </Typography>
        </Paper>

        {/* Hidden Gems List */}
        <Typography variant="h3" gutterBottom color="primary" sx={{ mb: 4 }}>
          Featured Hidden Gems
        </Typography>
        <Grid container spacing={4}>
          {hiddenGems.map((festival) => (
            <Grid item xs={12} md={6} key={festival.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
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
                    <LocationIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {`${festival.location.city}, ${festival.location.state}`}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <TimeIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      Best Time to Visit: {festival.touristInfo.bestTimeToVisit}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
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
                  <Typography variant="body2" color="text.secondary">
                    <strong>Cultural Significance:</strong>{" "}
                    {festival.culturalSignificance}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpenModal(festival)}
                    >
                      Plan Your Visit
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Plan Visit Modal */}
        <PlanVisitModal
          open={openModal}
          onClose={handleCloseModal}
          festival={selectedFestival || undefined}
          onSuccess={handlePlanSuccess}
        />

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Layout>
  );
};

export default HiddenGems;
