import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import Layout from "../components/Layout";

const About: React.FC = () => {
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
            About FestiveFusion
          </Typography>
          <Typography
            variant="h5"
            sx={{ maxWidth: 800, mx: "auto", opacity: 0.9 }}
          >
            Connecting people with India's rich cultural heritage through its
            vibrant festivals
          </Typography>
        </Box>

        {/* Mission Section */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 4,
                background: theme.palette.background.paper,
              }}
            >
              <Typography variant="h4" gutterBottom color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At FestiveFusion, we are dedicated to preserving and promoting
                India's diverse cultural heritage through its festivals. We
                believe that festivals are not just celebrations but living
                embodiments of our rich traditions, stories, and values.
              </Typography>
              <Typography variant="body1">
                Our mission is to create a bridge between tradition and
                modernity, helping people discover and experience the authentic
                essence of Indian festivals while supporting local communities
                and cultural preservation.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 4,
                background: theme.palette.background.paper,
              }}
            >
              <Typography variant="h4" gutterBottom color="primary">
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph>
                We envision a world where cultural heritage is celebrated and
                preserved, where people from all walks of life can experience
                the magic of Indian festivals and understand their deep cultural
                significance.
              </Typography>
              <Typography variant="body1">
                Through our platform, we aim to create meaningful connections
                between festival-goers, local communities, and cultural
                traditions, fostering a deeper appreciation for India's diverse
                cultural landscape.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Values Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h3" align="center" gutterBottom color="primary">
            Our Values
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: "Cultural Preservation",
                description:
                  "We are committed to preserving and promoting authentic cultural traditions and practices.",
              },
              {
                title: "Community Engagement",
                description:
                  "We actively engage with local communities to ensure sustainable and responsible tourism.",
              },
              {
                title: "Authentic Experiences",
                description:
                  "We strive to provide genuine cultural experiences that go beyond surface-level tourism.",
              },
              {
                title: "Education & Awareness",
                description:
                  "We believe in educating people about the cultural significance of festivals and traditions.",
              },
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 4,
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom color="primary">
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h3" align="center" gutterBottom color="primary">
            Join Our Journey
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ maxWidth: 800, mx: "auto", mb: 4 }}
          >
            Whether you're a festival enthusiast, a cultural explorer, or
            someone looking to experience the magic of Indian festivals, we
            invite you to be part of our community. Together, let's celebrate
            and preserve the rich tapestry of India's cultural heritage.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
