const express = require('express');
const Budget = require('../models/budget');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Create Budget
router.post('/', authMiddleware, async (req, res) => {
  const { amount, month } = req.body;
  const budget = new Budget({
    userId: req.user.id,
    amount,
    month,
  });
  await budget.save();
  res.status(201).json(budget);
});

// Get Budgets
router.get('/', authMiddleware, async (req, res) => {
  const budgets = await Budget.find({ userId: req.user.id });
  res.json(budgets);
});

module.exports = router;
