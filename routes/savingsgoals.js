const express = require('express');
const SavingsGoal = require('../models/SavingsGoal');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Create Savings Goal
router.post('/', authMiddleware, async (req, res) => {
  const { goalName, targetAmount, dueDate } = req.body;
  const savingsGoal = new SavingsGoal({
    userId: req.user.id,
    goalName,
    targetAmount,
    dueDate,
  });
  await savingsGoal.save();
  res.status(201).json(savingsGoal);
});

// Get Savings Goals
router.get('/', authMiddleware, async (req, res) => {
  const savingsGoals = await SavingsGoal.find({ userId: req.user.id });
  res.json(savingsGoals);
});

// Update Savings Goal
router.put('/:id', authMiddleware, async (req, res) => {
  const { currentAmount } = req.body;
  const savingsGoal = await SavingsGoal.findByIdAndUpdate(
    req.params.id,
    { $set: { currentAmount } },
    { new: true }
  );
  res.json(savingsGoal);
});

module.exports = router;
