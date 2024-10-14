const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Create Transaction
router.post('/', authMiddleware, async (req, res) => {
  const { description, amount } = req.body;
  const transaction = new Transaction({
    userId: req.user.id,
    description,
    amount,
  });
  await transaction.save();
  res.status(201).json(transaction);
});

// Get All Transactions
router.get('/', authMiddleware, async (req, res) => {
  const transactions = await Transaction.find({ userId: req.user.id });
  res.json(transactions);
});

// Delete Transaction
router.delete('/:id', authMiddleware, async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
