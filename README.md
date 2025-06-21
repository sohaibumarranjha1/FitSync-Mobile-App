FitSync – Personal Fitness Tracker
FitSync is a real-time fitness tracking app built with React Native (Expo) that helps users monitor walking, jogging, and running activities. It features integrated Google Maps tracking, step counting via accelerometer, and real-time activity logging with a clean, user-friendly interface.

📱 Features
🗺️ Live Map Integration for jogging/running

🧭 GPS-based Distance Tracking

🏃‍♂️ Step Counting & Jogging Detection using the accelerometer

📊 Recent Activity Logging with real-time updates

🔐 Login/Signup via backend API (MongoDB + Express.js)

⚛️ Context API for global activity state

✅ Smooth navigation using React Navigation

💅 Aesthetic UI with splash and onboarding screens

🧱 Tech Stack
Frontend:

React Native (Expo)

React Navigation

React Context API

Google Maps (Expo Location + MapView)

AsyncStorage (optional for local storage)

Backend:

Node.js with Express.js

MongoDB Atlas

Mongoose

📂 Project Structure
pgsql
Copy
Edit
FitSync/
├── App.js
├── app.json
├── screens/
│   ├── Splash.js
│   ├── Onboarding.js
│   ├── Login.js
│   ├── Signup.js
│   ├── Home.js
│   ├── Track.js
│   └── RecentActivityScreen.js
├── context/
│   └── ActivityContext.js
└── assets/
⚙️ Setup Instructions
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/sohaibumarranjha1/fitsync.git
cd fitsync
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start Expo Server
bash
Copy
Edit
npx expo start
4. Setup Backend (API)
Go to the backend/ directory (if separate).

Install dependencies:

bash
Copy
Edit
npm install
Connect to MongoDB Atlas in .env:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start backend server:

bash
Copy
Edit
node server.js
🌐 API Endpoints
Endpoint	Method	Description
/api/signup	POST	Register user
/api/login	POST	Login user
/api/activities	POST	Log activity
/api/activities/:id	GET	Get user activity

📸 Screens
Splash Screen

Onboarding Guide

Login & Signup

Home Dashboard

Track Screen with live map + step tracking

Recent Activity List

👨‍💻 Made with ❤️ by Sohaib Umar
"Track your goals. Sync your steps. Stay Fit with FitSync."
