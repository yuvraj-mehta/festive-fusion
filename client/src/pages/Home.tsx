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

// Sample festival data
const featuredFestivals = [
  {
    id: 1,
    title: "Diwali",
    description: "The Festival of Lights",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "November 12, 2024",
    location: "Pan India",
  },
  {
    id: 2,
    title: "Holi",
    description: "The Festival of Colors",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f7701e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "March 25, 2024",
    location: "Pan India",
  },
  {
    id: 3,
    title: "Durga Puja",
    description: "Celebration of Divine Feminine",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "October 20-24, 2024",
    location: "West Bengal",
  },
];

const upcomingFestivals = [
  {
    id: 4,
    title: "Ganesh Chaturthi",
    description: "Celebration of Lord Ganesha",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "September 7, 2024",
    location: "Maharashtra",
  },
  {
    id: 5,
    title: "Pongal",
    description: "Harvest Festival of South India",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "January 15, 2024",
    location: "Tamil Nadu",
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
                onClick={() => navigate("/upcoming")}
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
                  image={festival.image}
                  alt={festival.title}
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
                    {festival.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {festival.description}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                    📅 {festival.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📍 {festival.location}
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
                    image={festival.image}
                    alt={festival.title}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 600 }}
                    >
                      {festival.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {festival.description}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                      📅 {festival.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      📍 {festival.location}
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
              onClick={() => navigate("/upcoming")}
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
