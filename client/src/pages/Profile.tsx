import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

interface ProfileFormData {
  name: string;
  preferences: {
    categories: string[];
    regions: string[];
  };
}

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: user?.name || "",
    preferences: {
      categories: user?.preferences?.categories || [],
      regions: user?.preferences?.regions || [],
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      // Update profile logic here
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={4}>
            {/* Profile Information */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography variant="h5">Profile Information</Typography>
                  {!isEditing ? (
                    <IconButton onClick={() => setIsEditing(true)}>
                      <EditIcon />
                    </IconButton>
                  ) : (
                    <Box>
                      <IconButton onClick={handleSave} color="primary">
                        <SaveIcon />
                      </IconButton>
                      <IconButton onClick={() => setIsEditing(false)}>
                        <CancelIcon />
                      </IconButton>
                    </Box>
                  )}
                </Box>
                <Divider sx={{ mb: 2 }} />
                {isEditing ? (
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                  />
                ) : (
                  <Typography variant="body1" gutterBottom>
                    Name: {user?.name}
                  </Typography>
                )}
                <Typography variant="body1" gutterBottom>
                  Email: {user?.email}
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  onClick={logout}
                  sx={{ mt: 2 }}
                >
                  Logout
                </Button>
              </Paper>
            </Grid>

            {/* Planned Visits */}
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Planned Visits
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <List>
                  {user?.plannedVisits?.map((visit, index: number) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={visit.festivalId.title}
                        secondary={`Visit Date: ${new Date(
                          visit.visitDate
                        ).toLocaleDateString()}`}
                      />
                      <ListItemSecondaryAction>
                        <Chip
                          label={visit.status}
                          color={
                            visit.status === "completed"
                              ? "success"
                              : visit.status === "cancelled"
                              ? "error"
                              : "primary"
                          }
                          size="small"
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Saved Festivals */}
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Saved Festivals
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                  {user?.savedFestivals?.map((festival, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        sx={{
                          p: 2,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="body1">
                          {festival.title}
                        </Typography>
                        <IconButton size="small" color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Profile;
