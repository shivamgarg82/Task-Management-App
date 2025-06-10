# Task Manager - Full Stack MERN Application

![Task Manager Screenshot](./screenshot.png) <!-- Add a screenshot later -->

A simple yet powerful task management application built with the MERN stack (MongoDB, Express, React, and Node.js) that demonstrates full-stack CRUD operations.

## Features

- Create, Read, Update, and Delete tasks
- Mark tasks as complete/incomplete
- Responsive design that works on mobile and desktop
- Clean and intuitive user interface
- RESTful API backend

## Technologies Used

### Frontend
- React (Functional components with hooks)
- CSS (No external libraries - pure CSS for styling)
- Axios for API communication

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- CORS for cross-origin requests

## Live Demo

The application is deployed and can be accessed at:  
[Frontend URL](https://your-vercel-app.vercel.app)  
[Backend API](https://your-render-backend.onrender.com)

## Installation

To run this project locally, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager/backend
Install dependencies:

bash
npm install
Create a .env file in the backend directory with your MongoDB connection string:

text
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority
PORT=5000
Start the server:

bash
npm start
Frontend Setup
Navigate to the frontend directory:

bash
cd ../frontend
Install dependencies:

bash
npm install
Create a .env file in the frontend directory:

text
REACT_APP_API_URL=http://localhost:5000
Start the React application:

bash
npm start
Open your browser and visit http://localhost:3000

Project Structure
text
task-manager/
│
├── backend/
│   ├── server.js         # Main backend server file
│   ├── package.json      # Backend dependencies
│   └── .env             # Environment variables
│
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── App.js       # Main React component
│   │   ├── App.css      # Styling
│   │   └── index.js     # React entry point
│   └── package.json     # Frontend dependencies
│
└── README.md            # Project documentation
API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update an existing task
DELETE	/api/tasks/:id	Delete a task
Future Enhancements
User authentication

Task categories and tags

Due dates and reminders

Drag-and-drop reordering

Dark mode toggle

What I Learned
Building this project helped me:

Understand the full-stack development process

Implement CRUD operations in a MERN application

Manage state effectively in React

Create responsive layouts with CSS

Deploy both frontend and backend services

Screenshots
https://./screenshots/add-task.png <!-- Add actual screenshots -->
https://./screenshots/task-list.png

License
This project is open source and available under the MIT License.

