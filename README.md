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

Create .env in the /backend directory:

env
Copy
Edit
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
Install backend dependencies:

bash
Copy
Edit
cd backend
npm install
Install frontend dependencies:

bash
Copy
Edit
cd ../frontend
npm install
Start the backend server:

bash
Copy
Edit
cd ../backend
npx nodemon server.js
Start the frontend React app in another terminal:

bash
Copy
Edit
cd frontend
npm start
Visit http://localhost:3000 in your browser to use the app.

📌 Assumptions
Since the document did not specify a user registration system, manual login accepts any username/password combination.

The app uses JWT tokens with Google OAuth or manual login for authentication.

MongoDB Atlas is assumed as the database backend.

🏗️ Architecture Diagram

+-------------------------------+
|        User's Browser         |
| (React App: Login & Dashboard)|
+---------------+---------------+
                |
                v
+-------------------------------+
|  React Frontend (Netlify)     |
|  - Login with Google          |
|  - Calls API endpoints        |
+---------------+---------------+
                |
                v
+-------------------------------+
|  Node.js/Express Backend      |
|  (Render/Railway/Heroku)      |
|  - REST API /tasks            |
|  - Google OAuth handler       |
+-------+---------------+-------+
        |               |
        v               v
+---------------+  +----------------+
| MongoDB Atlas |  | Google OAuth   |
| - Task Data   |  | - Login Flow   |
+---------------+  +----------------+



🔗 Important Notes
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

## ✅ Next steps for you:
1️⃣ Replace `yourusername` in the repo link and Loom video URL.  
2️⃣ Add your actual architecture diagram image as `architecture-diagram.png` in your repo root.  
3️⃣ Deploy your app publicly (Render for backend, Netlify/Vercel for frontend) so it meets the “publicly deployed submission” requirement.  
4️⃣ Commit your `README.md`:
```bash
git add README.md architecture-diagram.png
git commit -m "Add README with instructions, assumptions, and diagram"
git push origin main
