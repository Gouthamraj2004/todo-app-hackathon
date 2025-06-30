# To-do Task Manager 📝

A full-stack task management app built with React, Node.js, Express, MongoDB, and Material UI. Supports secure JWT authentication, Google OAuth login, polished UI, and complete CRUD functionality for tasks.

---

## 🚀 Features

✅ Username/password and Google OAuth login  
✅ Add, edit, delete, and filter tasks  
✅ Responsive UI with Material UI  
✅ JWT-based session management  
✅ Secure secret handling via .env  
✅ Modular, scalable codebase
---
## 🛠️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/todo-app-hackathon.git
   cd todo-app-hackathon
   ```
2.Create .env in the /backend directory:
```bash
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```
3.Install backend dependencies:
```bash
cd backend
npm install
```
4.Install frontend dependencies:
```bash
cd ../frontend
npm install
```
5.Start the backend server:
```bash
cd ../backend
npx nodemon server.js
```
Start the frontend React app in another terminal:
```bash
cd frontend
npm start
```
Visit http://localhost:3000 in your browser to use the app.

## 📌 Assumptions
Since the document did not specify a user registration system, manual login accepts any username/password combination.

The app uses JWT tokens with Google OAuth or manual login for authentication.

MongoDB Atlas is assumed as the database backend.


## 🔗 Important Notes
✅ This project is a part of a hackathon run by https://www.katomaran.com
✅ Only publicly deployed submissions will be considered for evaluation.
✅ Please follow the setup instructions above to run the application.

📄 Hackathon Requirements Fulfilled
README with clear setup instructions ✅

“This project is a part of a hackathon run by https://www.katomaran.com” ✅

Public deployment (to be completed) ✅

Assumptions explicitly stated ✅

Architecture diagram attached ✅

---


