const mongoose = require('mongoose');
mongoose.pluralize(false);
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['admin', 'customer'], required: true }
});

module.exports = mongoose.model('User', userSchema);
