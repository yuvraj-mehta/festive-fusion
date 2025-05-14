import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Festival } from "../types";

// Sample festival data
const featuredFestivals: Festival[] = [
  {
    id: 1,
    name: "Diwali Festival",
    description:
      "The festival of lights celebrating the victory of light over darkness",
    region: "Pan India",
    type: "religious",
    startDate: "2024-11-01",
    endDate: "2024-11-05",
    location: {
      city: "Delhi",
      state: "Delhi",
      coordinates: {
        latitude: 28.6139,
        longitude: 77.209,
      },
    },
    images: [
      {
        url: "/images/diwali.jpg",
        caption: "Diwali celebrations",
      },
    ],
    culturalSignificance: "One of the most important festivals in Hinduism",
    touristInfo: {
      crowdLevel: "high",
      budgetLevel: "moderate",
      bestTimeToVisit: "November",
      accessibility: "Easily accessible",
    },
    localExperiences: [
      {
        name: "Rangoli Making",
        description: "Traditional floor art with colored powder",
        type: "cultural-activity",
      },
      {
        name: "Diya Lighting",
        description: "Lighting of traditional oil lamps",
        type: "cultural-activity",
      },
    ],
    weatherConditions: {
      temperature: {
        min: 15,
        max: 28,
      },
      rainfall: 0,
      humidity: 45,
    },
    isHiddenGem: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Holi",
    description: "The Festival of Colors",
    region: "Pan India",
    type: "religious",
    startDate: "2024-03-25",
    endDate: "2024-03-26",
    location: {
      city: "Mathura",
      state: "Uttar Pradesh",
      coordinates: {
        latitude: 27.4924,
        longitude: 77.6737,
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1615485500704-8e990f7701e3",
        caption: "Holi celebrations",
      },
    ],
    culturalSignificance:
      "Celebrates the arrival of spring and victory of good over evil",
    touristInfo: {
      crowdLevel: "high",
      budgetLevel: "budget",
      bestTimeToVisit: "March",
      accessibility: "Easily accessible",
    },
    localExperiences: [
      {
        name: "Color Play",
        description: "Traditional playing with colors",
        type: "cultural-activity",
      },
      {
        name: "Folk Music",
        description: "Traditional Holi songs and dances",
        type: "performance-art",
      },
    ],
    weatherConditions: {
      temperature: {
        min: 20,
        max: 32,
      },
      rainfall: 0,
      humidity: 40,
    },
    isHiddenGem: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Durga Puja",
    description: "Celebration of Divine Feminine",
    region: "West Bengal",
    type: "religious",
    startDate: "2024-10-20",
    endDate: "2024-10-24",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      coordinates: {
        latitude: 22.5726,
        longitude: 88.3639,
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        caption: "Durga Puja celebrations",
      },
    ],
    culturalSignificance: "Celebrates the victory of Goddess Durga over evil",
    touristInfo: {
      crowdLevel: "high",
      budgetLevel: "moderate",
      bestTimeToVisit: "October",
      accessibility: "Easily accessible",
    },
    localExperiences: [
      {
        name: "Pandal Hopping",
        description: "Visit various themed pandals across the city",
        type: "cultural-activity",
      },
      {
        name: "Bengali Cuisine",
        description: "Traditional Bengali festival food",
        type: "culinary-experience",
      },
    ],
    weatherConditions: {
      temperature: {
        min: 25,
        max: 32,
      },
      rainfall: 5,
      humidity: 75,
    },
    isHiddenGem: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const upcomingFestivals: Festival[] = [
  {
    id: 4,
    name: "Ganesh Chaturthi",
    description: "Celebration of Lord Ganesha",
    region: "Maharashtra",
    type: "religious",
    startDate: "2024-09-07",
    endDate: "2024-09-13",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      coordinates: {
        latitude: 19.076,
        longitude: 72.8777,
      },
    },
    images: [
      {
        url: "/images/ganesh.jpg",
        caption: "Ganesh Chaturthi celebrations",
      },
    ],
    culturalSignificance: "Celebrates the birth of Lord Ganesha",
    touristInfo: {
      crowdLevel: "high",
      budgetLevel: "moderate",
      bestTimeToVisit: "September",
      accessibility: "Moderate",
    },
    localExperiences: [
      {
        name: "Bhog",
        description: "Feast offered to Lord Ganesha",
        type: "culinary-experience",
      },
      {
        name: "Roli Choli",
        description: "Traditional dance performed during Ganesh Chaturthi",
        type: "performance-art",
      },
    ],
    weatherConditions: {
      temperature: {
        min: 20,
        max: 32,
      },
      rainfall: 0,
      humidity: 40,
    },
    isHiddenGem: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 5,
    name: "Pongal",
    description: "Harvest Festival of South India",
    region: "Tamil Nadu",
    type: "seasonal",
    startDate: "2024-01-15",
    endDate: "2024-01-17",
    location: {
      city: "Tanjavur",
      state: "Tamil Nadu",
      coordinates: {
        latitude: 10.7956,
        longitude: 79.1322,
      },
    },
    images: [
      {
        url: "/images/pongal.jpg",
        caption: "Pongal celebrations",
      },
    ],
    culturalSignificance: "Celebrates the harvest season",
    touristInfo: {
      crowdLevel: "medium",
      budgetLevel: "budget",
      bestTimeToVisit: "January",
      accessibility: "Moderate",
    },
    localExperiences: [
      {
        name: "Kolam",
        description: "Decorative rangoli made with rice flour",
        type: "cultural-activity",
      },
      {
        name: "Pongal",
        description: "Traditional sweet made from rice and jaggery",
        type: "culinary-experience",
      },
    ],
    weatherConditions: {
      temperature: {
        min: 20,
        max: 30,
      },
      rainfall: 0,
      humidity: 45,
    },
    isHiddenGem: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Layout>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: "white",
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: 700,
                  mb: 2,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                Discover India's Vibrant Festivals
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  mb: 4,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                Immerse yourself in the rich cultural tapestry of India's
                diverse festivals
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate("/upcoming-festivals")}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                Explore Festivals
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Festivals Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 6,
            textAlign: "center",
            fontWeight: 600,
            color: "primary.main",
          }}
        >
          Featured Festivals
        </Typography>
        <Grid container spacing={4}>
          {featuredFestivals.map((festival) => (
            <Grid item key={festival.id} xs={12} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
                onClick={() => navigate(`/festival/${festival.id}`)}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={festival.images[0].url}
                  alt={festival.name}
                  sx={{
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    {festival.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {festival.description}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                    📅 {`${festival.startDate} - ${festival.endDate}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📍 {`${festival.location.city}, ${festival.location.state}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Upcoming Festivals Section */}
      <Box sx={{ bgcolor: "grey.100", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              textAlign: "center",
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            Upcoming Festivals
          </Typography>
          <Grid container spacing={4}>
            {upcomingFestivals.map((festival) => (
              <Grid item key={festival.id} xs={12} md={6}>
                <Card
                  sx={{
                    display: "flex",
                    height: "100%",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
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
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 600 }}
                    >
                      {festival.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {festival.description}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                      📅 {`${festival.startDate} - ${festival.endDate}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      📍{" "}
                      {`${festival.location.city}, ${festival.location.state}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: 8,
          backgroundImage: "linear-gradient(45deg, #E65100 30%, #1A237E 90%)",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ mb: 3, fontWeight: 600 }}
          >
            Ready to Experience the Magic?
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 4, opacity: 0.9 }}>
            Join us in celebrating India's rich cultural heritage through its
            vibrant festivals
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              color="inherit"
              size="large"
              onClick={() => navigate("/hidden-gems")}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Discover Hidden Gems
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate("/upcoming-festivals")}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              View Upcoming Events
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
