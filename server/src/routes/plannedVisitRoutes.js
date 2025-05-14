const express = require('express');
const router = express.Router();
const plannedVisitController = require('../controllers/plannedVisitController');
const { protect } = require('../middleware/auth');

// All routes are protected
router.use(protect);

// Get user's planned visits
router.get('/user', plannedVisitController.getUserVisits);

// Create a new planned visit
router.post('/', plannedVisitController.createVisit);

// Update a planned visit
router.put('/:id', plannedVisitController.updateVisit);

// Delete a planned visit
router.delete('/:id', plannedVisitController.deleteVisit);

module.exports = router; 