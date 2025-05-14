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
  Chip,
  useTheme,
  Paper,
} from "@mui/material";
import {
  CalendarMonth as CalendarIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
} from "@mui/icons-material";
import Layout from "../components/Layout";

// Sample upcoming festivals data
const upcomingFestivals = [
  {
    id: 1,
    title: "Ganesh Chaturthi",
    description:
      "A grand celebration of Lord Ganesha's birth, featuring elaborate processions, cultural performances, and community celebrations.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "September 7, 2024",
    location: "Maharashtra",
    duration: "10 days",
    category: "Religious",
    highlights: [
      "Ganesh Visarjan",
      "Cultural Programs",
      "Community Celebrations",
    ],
  },
  {
    id: 2,
    title: "Pongal",
    description:
      "A harvest festival celebrated in Tamil Nadu, marking the beginning of the sun's northward journey and the end of winter.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "January 15, 2024",
    location: "Tamil Nadu",
    duration: "4 days",
    category: "Harvest",
    highlights: ["Traditional Cooking", "Cattle Worship", "Cultural Events"],
  },
  {
    id: 3,
    title: "Hornbill Festival",
    description:
      "A celebration of Naga culture and traditions, featuring tribal dances, music, and traditional games.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "December 1-10, 2024",
    location: "Nagaland",
    duration: "10 days",
    category: "Cultural",
    highlights: ["Tribal Dances", "Traditional Music", "Food Festival"],
  },
  {
    id: 4,
    title: "Kumbh Mela",
    description:
      "One of the world's largest religious gatherings, where millions of devotees gather to take a holy dip in sacred rivers.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "January 15 - March 4, 2025",
    location: "Prayagraj, Uttar Pradesh",
    duration: "49 days",
    category: "Religious",
    highlights: ["Holy Dip", "Spiritual Discourses", "Cultural Programs"],
  },
];

const UpcomingFestivals: React.FC = () => {
  const theme = useTheme();

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
          {upcomingFestivals.map((festival) => (
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
                  image={festival.image}
                  alt={festival.title}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" gutterBottom color="primary">
                    {festival.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {festival.description}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CalendarIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {festival.date}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <LocationIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {festival.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <TimeIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      Duration: {festival.duration}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {festival.highlights.map((highlight, index) => (
                      <Chip
                        key={index}
                        label={highlight}
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
