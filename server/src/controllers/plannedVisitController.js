const PlannedVisit = require('../models/PlannedVisit');
const mongoose = require('mongoose');

// Get all planned visits for a user
exports.getUserVisits = async (req, res) => {
  try {
    const visits = await PlannedVisit.find({ userId: req.user._id })
      .populate('festivalId')
      .sort({ visitDate: 1 });

    // Add debug logging
    console.log('Found visits:', JSON.stringify(visits, null, 2));

    // Filter out visits with null festivalId
    const validVisits = visits.filter(visit => visit.festivalId);

    if (visits.length !== validVisits.length) {
      console.warn(`Found ${visits.length - validVisits.length} visits with null festivalId`);
    }

    res.json(validVisits);
  } catch (error) {
    console.error('Error getting user visits:', error);
    res.status(500).json({ message: 'Error getting planned visits' });
  }
};

// Create a new planned visit
exports.createVisit = async (req, res) => {
  try {
    const { festivalId, visitDate, groupSize, specialRequirements } = req.body;

    // Validate festivalId
    if (!mongoose.Types.ObjectId.isValid(festivalId)) {
      return res.status(400).json({ message: 'Invalid festival ID' });
    }

    // Create the visit with the correct festivalId format
    const visit = await PlannedVisit.create({
      userId: req.user._id,
      festivalId: new mongoose.Types.ObjectId(festivalId),
      visitDate: new Date(visitDate),
      groupSize: parseInt(groupSize),
      specialRequirements
    });

    // Populate the festival details before sending response
    const populatedVisit = await visit.populate('festivalId');
    res.status(201).json(populatedVisit);
  } catch (error) {
    console.error('Error creating visit:', error);
    res.status(500).json({ message: 'Error creating planned visit', error: error.message });
  }
};

// Update a planned visit
exports.updateVisit = async (req, res) => {
  try {
    const { visitDate, groupSize, specialRequirements, status } = req.body;

    // Validate visitId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid visit ID' });
    }

    const visit = await PlannedVisit.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      {
        visitDate: visitDate ? new Date(visitDate) : undefined,
        groupSize: groupSize ? parseInt(groupSize) : undefined,
        specialRequirements,
        status
      },
      { new: true }
    ).populate('festivalId');

    if (!visit) {
      return res.status(404).json({ message: 'Planned visit not found' });
    }

    res.json(visit);
  } catch (error) {
    console.error('Error updating visit:', error);
    res.status(500).json({ message: 'Error updating planned visit', error: error.message });
  }
};

// Delete a planned visit
exports.deleteVisit = async (req, res) => {
  try {
    // Validate visitId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid visit ID' });
    }

    const visit = await PlannedVisit.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!visit) {
      return res.status(404).json({ message: 'Planned visit not found' });
    }

    res.json({ message: 'Planned visit deleted successfully' });
  } catch (error) {
    console.error('Error deleting visit:', error);
    res.status(500).json({ message: 'Error deleting planned visit' });
  }
}; 