import React, { useState } from 'react';

const AddBudget = () => {
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await fetch('/api/budgets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ amount, month }),
    });
    setAmount('');
    setMonth('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Budget Amount" required />
      <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} required />
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default AddBudget;
    