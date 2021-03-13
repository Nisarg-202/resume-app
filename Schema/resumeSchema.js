const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  resume: {
    type: Buffer,
    required: true,
  },
});

module.exports = mongoose.model('Resume', resumeSchema);
