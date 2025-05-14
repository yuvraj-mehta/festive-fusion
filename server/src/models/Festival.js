const mongoose = require('mongoose');

const festivalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['religious', 'tribal', 'harvest', 'seasonal'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  location: {
    city: String,
    state: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  images: [{
    url: String,
    caption: String
  }],
  culturalSignificance: {
    type: String,
    required: true
  },
  touristInfo: {
    crowdLevel: {
      type: String,
      enum: ['low', 'medium', 'high'],
      required: true
    },
    budgetLevel: {
      type: String,
      enum: ['budget', 'moderate', 'luxury'],
      required: true
    },
    bestTimeToVisit: String,
    accessibility: String
  },
  localExperiences: [{
    name: String,
    description: String,
    type: String
  }],
  weatherConditions: {
    temperature: {
      min: Number,
      max: Number
    },
    rainfall: Number,
    humidity: Number
  },
  isHiddenGem: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
festivalSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Festival', festivalSchema); 