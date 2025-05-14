import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Grid,
} from "@mui/material";
import { Festival, CreatePlannedVisitDto } from "../types";
import { plannedVisitsApi } from "../services/api";

interface PlanVisitModalProps {
  open: boolean;
  onClose: () => void;
  festival?: Festival;
  festivals?: Festival[];
  onSuccess?: () => void;
}

const PlanVisitModal: React.FC<PlanVisitModalProps> = ({
  open,
  onClose,
  festival,
  festivals,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    festivalId: festival?.id || "",
    visitDate: "",
    groupSize: "1",
    specialRequirements: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const visitData: CreatePlannedVisitDto = {
        festivalId: festival ? festival.id : Number(formData.festivalId),
        visitDate: formData.visitDate,
        groupSize: parseInt(formData.groupSize),
        specialRequirements: formData.specialRequirements,
      };
      await plannedVisitsApi.create(visitData);
      onSuccess?.();
      handleClose();
    } catch (error) {
      console.error("Error creating planned visit:", error);
    }
  };

  const handleClose = () => {
    setFormData({
      festivalId: festival?.id || "",
      visitDate: "",
      groupSize: "1",
      specialRequirements: "",
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Plan Your Visit</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={3}>
            {!festival && festivals && (
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="festival-select-label">
                    Select Festival
                  </InputLabel>
                  <Select
                    labelId="festival-select-label"
                    value={formData.festivalId}
                    name="festivalId"
                    label="Select Festival"
                    onChange={handleChange as any}
                    required
                  >
                    {festivals.map((fest) => (
                      <MenuItem key={fest.id} value={fest.id}>
                        {fest.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    Choose the festival you'd like to visit
                  </FormHelperText>
                </FormControl>
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Visit Date"
                name="visitDate"
                type="date"
                value={formData.visitDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default PlanVisitModal;
