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

// Sample hidden gems data
const hiddenGems = [
  {
    id: 1,
    title: "Hornbill Festival",
    description:
      "A lesser-known celebration of Naga culture in Nagaland, featuring tribal dances, music, and traditional games. This festival showcases the rich heritage of 16 major Naga tribes.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Kisama, Nagaland",
    timing: "December 1-10",
    category: "Tribal",
    uniqueFeatures: [
      "Tribal Dances",
      "Traditional Music",
      "Food Festival",
      "Cultural Shows",
    ],
    bestTimeToVisit: "December",
    culturalSignificance: "Celebrates the cultural heritage of Naga tribes",
  },
  {
    id: 2,
    title: "Ziro Festival of Music",
    description:
      "An independent music festival set in the picturesque Ziro Valley of Arunachal Pradesh. It's a unique blend of contemporary music and tribal culture.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Ziro Valley, Arunachal Pradesh",
    timing: "September",
    category: "Music",
    uniqueFeatures: [
      "Live Music",
      "Local Food",
      "Camping",
      "Cultural Exchange",
    ],
    bestTimeToVisit: "September",
    culturalSignificance: "Promotes independent music and tribal culture",
  },
  {
    id: 3,
    title: "Sindhu Darshan Festival",
    description:
      "A unique festival in Ladakh that celebrates the River Indus (Sindhu) and promotes national integration. The festival features cultural performances and a symbolic offering of water from different rivers of India.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Leh, Ladakh",
    timing: "June",
    category: "Cultural",
    uniqueFeatures: [
      "River Ceremony",
      "Cultural Shows",
      "Traditional Music",
      "Local Food",
    ],
    bestTimeToVisit: "June",
    culturalSignificance:
      "Celebrates the River Indus and promotes national integration",
  },
  {
    id: 4,
    title: "Chapchar Kut",
    description:
      "A spring festival of the Mizo people in Mizoram, celebrating the completion of jhum (shifting cultivation) and the beginning of a new agricultural cycle.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Aizawl, Mizoram",
    timing: "March",
    category: "Harvest",
    uniqueFeatures: [
      "Traditional Dances",
      "Bamboo Dance",
      "Local Cuisine",
      "Cultural Shows",
    ],
    bestTimeToVisit: "March",
    culturalSignificance: "Celebrates the beginning of the agricultural season",
  },
];

const HiddenGems: React.FC = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitDate: "",
    groupSize: "",
    specialRequirements: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      visitDate: "",
      groupSize: "",
      specialRequirements: "",
    });
    setSelectedFestival("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as string]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setSnackbar({
      open: true,
      message:
        "Thank you for your interest! We'll contact you shortly with more details.",
      severity: "success",
    });
    handleCloseModal();
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
                    <LocationIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {festival.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <TimeIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      Best Time to Visit: {festival.bestTimeToVisit}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    {festival.uniqueFeatures.map((feature, index) => (
                      <Chip
                        key={index}
                        label={feature}
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
            Ready to Explore?
          </Typography>
          <Typography variant="body1" paragraph>
            Join us in discovering these hidden gems and experience the
            authentic cultural heritage of India.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
            onClick={handleOpenModal}
          >
            Plan Your Visit
          </Button>
        </Box>

        {/* Plan Your Visit Modal */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="plan-visit-modal"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 500 },
              bgcolor: "background.paper",
              borderRadius: 4,
              boxShadow: 24,
              p: 4,
              maxHeight: "90vh",
              overflow: "auto",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              color="primary"
            >
              Plan Your Visit
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="festival-select-label">
                      Select Festival
                    </InputLabel>
                    <Select
                      labelId="festival-select-label"
                      value={selectedFestival}
                      label="Select Festival"
                      onChange={(e) => setSelectedFestival(e.target.value)}
                      required
                    >
                      {hiddenGems.map((festival) => (
                        <MenuItem key={festival.id} value={festival.title}>
                          {festival.title}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>
                      Choose the festival you'd like to visit
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Preferred Visit Date"
                    name="visitDate"
                    type="date"
                    value={formData.visitDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Group Size"
                    name="groupSize"
                    type="number"
                    value={formData.groupSize}
                    onChange={handleChange}
                    InputProps={{ inputProps: { min: 1 } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Special Requirements"
                    name="specialRequirements"
                    multiline
                    rows={3}
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    helperText="Any specific requirements or preferences for your visit"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}
                  >
                    <Button variant="outlined" onClick={handleCloseModal}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Modal>

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
