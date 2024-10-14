import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const SpendingChart = () => {
  const [chartData, setChartData] = useState({});

  const fetchData = async () => {
    // Fetch budgets and transactions, then process data here.
    const budgetsResponse = await fetch('/api/budgets');
    const budgets = await budgetsResponse.json();
    const transactionsResponse = await fetch('/api/transactions');
    const transactions = await transactionsResponse.json();

    // Example processing
    const data = {
      labels: budgets.map(b => b.month),
      datasets: [
        {
          label: 'Spending',
          data: transactions.map(t => t.amount), // Customize based on your needs
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };
    setChartData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Spending Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default SpendingChart;
