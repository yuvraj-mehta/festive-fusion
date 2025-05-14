import React, { useState, useEffect } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { plannedVisitsApi } from "../services/api";
import { PlannedVisit } from "../types";

interface ProfileFormData {
  name: string;
  preferences: {
    categories: string[];
    regions: string[];
  };
}

interface EditVisitData {
  visitDate: string;
  groupSize: number;
  specialRequirements?: string;
  status: "planned" | "completed" | "cancelled";
}

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editingVisit, setEditingVisit] = useState<PlannedVisit | null>(null);
  const [plannedVisits, setPlannedVisits] = useState<PlannedVisit[]>([]);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: user?.name || "",
    preferences: {
      categories: user?.preferences?.categories || [],
      regions: user?.preferences?.regions || [],
    },
  });

  const [visitFormData, setVisitFormData] = useState<EditVisitData>({
    visitDate: "",
    groupSize: 1,
    specialRequirements: "",
    status: "planned",
  });

  useEffect(() => {
    loadPlannedVisits();
  }, []);

  const loadPlannedVisits = async () => {
    try {
      const visits = await plannedVisitsApi.getUserVisits();
      console.log("Received planned visits:", visits);
      setPlannedVisits(visits);
    } catch (error) {
      console.error("Error loading planned visits:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleVisitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisitFormData({
      ...visitFormData,
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

  const handleEditVisit = (visit: PlannedVisit) => {
    setEditingVisit(visit);
    setVisitFormData({
      visitDate: visit.visitDate,
      groupSize: visit.groupSize,
      specialRequirements: visit.specialRequirements || "",
      status: visit.status,
    });
  };

  const handleSaveVisit = async () => {
    if (!editingVisit) return;

    try {
      await plannedVisitsApi.update(editingVisit.id, visitFormData);
      setEditingVisit(null);
      loadPlannedVisits();
    } catch (error) {
      console.error("Error updating visit:", error);
    }
  };

  const handleDeleteVisit = async (visitId: number) => {
    try {
      await plannedVisitsApi.delete(visitId);
      loadPlannedVisits();
    } catch (error) {
      console.error("Error deleting visit:", error);
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
                  {plannedVisits.map((visit) => (
                    <ListItem
                      key={visit.id}
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 1,
                        mb: 1,
                      }}
                    >
                      <ListItemText
                        primary={
                          (visit.festivalId &&
                            typeof visit.festivalId === "object" &&
                            visit.festivalId.name) ||
                          "Unknown Festival"
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              variant="body2"
                              component="span"
                              display="block"
                            >
                              Visit Date:{" "}
                              {new Date(visit.visitDate).toLocaleDateString()}
                            </Typography>
                            <Typography
                              variant="body2"
                              component="span"
                              display="block"
                            >
                              Group Size: {visit.groupSize}
                            </Typography>
                            {visit.specialRequirements && (
                              <Typography
                                variant="body2"
                                component="span"
                                display="block"
                              >
                                Special Requirements:{" "}
                                {visit.specialRequirements}
                              </Typography>
                            )}
                          </React.Fragment>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Box
                          sx={{ display: "flex", gap: 1, alignItems: "center" }}
                        >
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
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            onClick={() => handleEditVisit(visit)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => handleDeleteVisit(visit.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Edit Visit Dialog */}
        <Dialog open={!!editingVisit} onClose={() => setEditingVisit(null)}>
          <DialogTitle>Edit Planned Visit</DialogTitle>
          <DialogContent>
            <Box sx={{ pt: 2 }}>
              <TextField
                fullWidth
                label="Visit Date"
                name="visitDate"
                type="date"
                value={visitFormData.visitDate}
                onChange={handleVisitChange}
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Group Size"
                name="groupSize"
                type="number"
                value={visitFormData.groupSize}
                onChange={handleVisitChange}
                InputProps={{ inputProps: { min: 1 } }}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Special Requirements"
                name="specialRequirements"
                multiline
                rows={3}
                value={visitFormData.specialRequirements}
                onChange={handleVisitChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                select
                label="Status"
                name="status"
                value={visitFormData.status}
                onChange={handleVisitChange}
              >
                <MenuItem value="planned">Planned</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="cancelled">Cancelled</MenuItem>
              </TextField>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditingVisit(null)}>Cancel</Button>
            <Button
              onClick={handleSaveVisit}
              variant="contained"
              color="primary"
            >
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Layout>
  );
};

export default Profile;
