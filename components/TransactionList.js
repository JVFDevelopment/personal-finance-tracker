import React, { useEffect, useState } from 'react';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/transactions', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setTransactions(data);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await fetch(`/api/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    fetchTransactions(); // Refresh the list
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.description}: ${transaction.amount}
            <button onClick={() => handleDelete(transaction._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
