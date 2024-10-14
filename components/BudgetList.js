import React, { useEffect, useState } from 'react';

const BudgetList = () => {
  const [budgets, setBudgets] = useState([]);

  const fetchBudgets = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/budgets', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setBudgets(data);
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  return (
    <div>
      <h2>Budgets</h2>
      <ul>
        {budgets.map((budget) => (
          <li key={budget._id}>
            ${budget.amount} for {budget.month}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;
