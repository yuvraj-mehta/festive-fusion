const express = require('express');
const router = express.Router();
const festivalController = require('../controllers/festivalController');

// Get all festivals with filtering
router.get('/', festivalController.getFestivals);

// Get hidden gems
router.get('/hidden-gems', festivalController.getHiddenGems);

// Get upcoming festivals
router.get('/upcoming', festivalController.getUpcomingFestivals);

// Get a single festival
router.get('/:id', festivalController.getFestivalById);

// Create a new festival
router.post('/', festivalController.createFestival);

// Update a festival
router.put('/:id', festivalController.updateFestival);

// Delete a festival
router.delete('/:id', festivalController.deleteFestival);

module.exports = router; 