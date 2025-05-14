const mongoose = require('mongoose');

const plannedVisitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  festivalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Festival',
    required: true
  },
  visitDate: {
    type: Date,
    required: true
  },
  groupSize: {
    type: Number,
    required: true,
    min: 1
  },
  specialRequirements: {
    type: String
  },
  status: {
    type: String,
    enum: ['planned', 'completed', 'cancelled'],
    default: 'planned'
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;

      // Handle populated festival data
      if (ret.festivalId && typeof ret.festivalId === 'object') {
        const festival = ret.festivalId;
        ret.festivalId = {
          id: festival._id,
          name: festival.name,
          description: festival.description,
          startDate: festival.startDate,
          endDate: festival.endDate,
          location: festival.location,
          type: festival.type
        };
      }
      return ret;
    }
  }
});

module.exports = mongoose.model('PlannedVisit', plannedVisitSchema); 