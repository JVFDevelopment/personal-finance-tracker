Personal Finance Management App
Table of Contents
Introduction
Features
Technologies Used
Installation
Usage
API Endpoints
Contributing
License
Introduction
This Personal Finance Management App helps users track their expenses, set budgets, and manage savings goals. It provides a user-friendly interface for recording transactions and visualizing spending, making personal finance management easier and more efficient.

Features
User authentication (registration and login)
Transaction management (add, view, delete transactions)
Budget tracking (set budgets for specific months)
Savings goals (set and track savings goals)
Data visualization (charts to visualize spending vs. budget)
Technologies Used
Front-End: React, React Router, Axios
Back-End: Node.js, Express, MongoDB (Mongoose)
Authentication: JSON Web Tokens (JWT)
Testing: Jest, React Testing Library, Supertest
Deployment: Heroku (for back-end), Vercel (for front-end)
Installation
To run this project locally, follow these steps:

Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/finance-management-app.git
cd finance-management-app
Back-End Setup
Navigate to the back-end folder:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Create a .env file and add your environment variables:
bash
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the server:
bash
Copy code
node index.js
Front-End Setup
Navigate to the front-end folder:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Start the React app:
bash
Copy code
npm start
Usage
Register a new account or log in with existing credentials.
Add transactions to track expenses.
Set monthly budgets and savings goals.
Visualize your spending and progress towards your savings goals.
API Endpoints
Authentication
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in an existing user
Transactions
POST /api/transactions: Add a new transaction
GET /api/transactions: Get all transactions for the logged-in user
DELETE /api/transactions/:id: Delete a transaction
Budgets
POST /api/budgets: Create a new budget
GET /api/budgets: Get all budgets for the logged-in user
Savings Goals
POST /api/savingsGoals: Create a new savings goal
GET /api/savingsGoals: Get all savings goals for the logged-in user
PUT /api/savingsGoals/:id: Update a savings goal
Contributing
Contributions are welcome! If you have suggestions for improvements or features, please create an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
