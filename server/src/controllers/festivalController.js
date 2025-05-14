const Festival = require('../models/Festival');

// Get all festivals with filtering options
exports.getFestivals = async (req, res) => {
  try {
    const {
      region,
      type,
      startDate,
      endDate,
      crowdLevel,
      budgetLevel,
      isHiddenGem
    } = req.query;

    const query = {};

    if (region) query.region = region;
    if (type) query.type = type;
    if (crowdLevel) query['touristInfo.crowdLevel'] = crowdLevel;
    if (budgetLevel) query['touristInfo.budgetLevel'] = budgetLevel;
    if (isHiddenGem) query.isHiddenGem = isHiddenGem === 'true';
    if (startDate && endDate) {
      query.startDate = { $gte: new Date(startDate) };
      query.endDate = { $lte: new Date(endDate) };
    }

    const festivals = await Festival.find(query).sort({ startDate: 1 });
    res.json(festivals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single festival by ID
exports.getFestivalById = async (req, res) => {
  try {
    const festival = await Festival.findById(req.params.id);
    if (!festival) {
      return res.status(404).json({ message: 'Festival not found' });
    }
    res.json(festival);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new festival
exports.createFestival = async (req, res) => {
  try {
    const festival = new Festival(req.body);
    const savedFestival = await festival.save();
    res.status(201).json(savedFestival);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a festival
exports.updateFestival = async (req, res) => {
  try {
    const festival = await Festival.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!festival) {
      return res.status(404).json({ message: 'Festival not found' });
    }
    res.json(festival);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a festival
exports.deleteFestival = async (req, res) => {
  try {
    const festival = await Festival.findByIdAndDelete(req.params.id);
    if (!festival) {
      return res.status(404).json({ message: 'Festival not found' });
    }
    res.json({ message: 'Festival deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get hidden gems
exports.getHiddenGems = async (req, res) => {
  try {
    const hiddenGems = await Festival.find({ isHiddenGem: true });
    res.json(hiddenGems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get upcoming festivals
exports.getUpcomingFestivals = async (req, res) => {
  try {
    const today = new Date();
    const upcomingFestivals = await Festival.find({
      startDate: { $gte: today }
    }).sort({ startDate: 1 });
    res.json(upcomingFestivals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 