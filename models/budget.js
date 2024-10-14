const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  month: { type: String, required: true }, // Format: YYYY-MM
});

module.exports = mongoose.model('Budget', BudgetSchema);
