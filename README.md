<h1 align="center">Mystery Maze</h1>
<h2 align="center">A web-based fantasy-themed puzzle and riddle-solving platform developed for the Digi Week Competition organized at J.C. Bose University of Science and Technology, YMCA.</h2>
<h2>Overview</h2>
<p>Mystery Maze is an interactive adventure game where participants solve riddles, progress through multiple locations, earn points, and compete on a live leaderboard. The platform was developed as part of a technical competition during Digi Week and combines storytelling, gamification, and logical problem-solving into a single experience.</p>
<p>The application allows participants to navigate through different stages, answer riddles, track their progress, and compete against other teams in real time.</p>
<h2>Competition Details</h2>
<table align="center">
    <tr>
        <th>Field</th>
        <th>Details</th>
    </tr>
    <tr>
        <td><b>Event</b></td>
        <td>Digi Week</td>
    </tr>
    <tr>
        <td><b>Organization</b></td>
        <td>J.C. Bose University of Science and Technology, YMCA</td>
    </tr>
    <tr>
        <td><b>Category</b></td>
        <td>Technical Competition</td>
    </tr>
    <tr>
        <td><b>Project Type</b></td>
        <td>Web Application</td>
    </tr>
    <tr>
        <td><b>Theme</b></td>
        <td>Harry Potter</td>
    </tr>
    <tr>
        <td><b>Mode</b></td>
        <td>Team Participation</td>
    </tr>
</table>
<h2>Features</h2>

* User Authentication
* Team Registration
* Interactive Riddle Challenges
* Multi-Level Gameplay
* Real-Time Leaderboard
* Score Tracking System
* Progress Saving
* Fantasy-Themed User Interface
* Firebase Cloud Integration
* Responsive Design
* Automatic Progress Recovery
* Dynamic Question Handling
<h2>Technology Stack</h2>
<h3>Frontend</h3>

* HTML5
* CSS3
* JavaScript (ES6)
<h3>Backend Services</h3>

* Firebase Authentication
* Cloud Firestore
<h3>Hosting and Deployment</h3>

* Vercel
<h3>Development Tools</h3>

* Visual Studio Code
* Git
* GitHub

![System Architecture](assets/1.png)
Application Workflow

Login
  |
  v
Rules Page
  |
  v
Game Dashboard
  |
  v
Riddle Challenge
  |
  v
Answer Validation
  |
  +---- Incorrect Answer
  |            |
  |            v
  |      Retry Attempt
  |
  +---- Correct Answer
               |
               v
       Score Update
               |
               v
      Firebase Storage
               |
               v
      Leaderboard Update
               |
               v
          Next Riddle

⸻

Project Structure

MysteryMaze
│
├── pages
│   └── index.js
│
├── public
│   ├── about.html
│   ├── login.html
│   ├── main.html
│   ├── riddles.html
│   ├── rules.html
│   ├── thankyou.html
│   ├── script.js
│   │
│   ├── logo.png
│   ├── castle.png
│   ├── commonroom.png
│   ├── crest.png
│   ├── forest.png
│   ├── greathall.png
│   ├── hogwarts.png
│   ├── skyline.png
│   ├── wallpaper.png
│   ├── forbidden.png
│   ├── next.svg
│   ├── globe.svg
│   ├── file.svg
│   ├── window.svg
│   └── other assets
│
├── next.config.mjs
├── jsconfig.json
├── package.json
├── package-lock.json
└── .gitignore

⸻

Database Design

Collection: Users

{
  "uid": "user_id",
  "name": "Player Name",
  "email": "player@example.com",
  "score": 120,
  "currentLevel": 5
}

Collection: Team Scores

{
  "teamName": "Mystic Wizards",
  "score": 450
}

Collection: Riddles

{
  "id": "R1",
  "question": "Sample Riddle",
  "answer": "Sample Answer"
}

⸻

Installation

Clone Repository

git clone https://github.com/your-username/mystery-maze.git
cd mystery-maze

Install Dependencies

npm install

Configure Firebase

Create a Firebase Project and enable:

* Firebase Authentication
* Cloud Firestore

Replace the Firebase configuration with your own credentials.

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXX"
};

⸻

Running the Project Locally

Start the development server:

npm run dev

Open:

http://localhost:3000

⸻

Deployment

Deploy on Vercel

Install Vercel CLI:

npm install -g vercel

Deploy:

vercel

Production Deployment:

vercel --prod

⸻

Screenshots

Login Page

Add screenshot here.

Rules Page

Add screenshot here.

Main Dashboard

Add screenshot here.

Riddle Challenge Page

Add screenshot here.

Leaderboard

Add screenshot here.

⸻

Future Enhancements

* Multiplayer Competition Mode
* Admin Dashboard
* AI Generated Riddles
* Hint and Reward System
* Achievement Badges
* Analytics Dashboard
* Mobile Application Version
* Tournament Management System

⸻

Learning Outcomes

* Frontend Development using HTML, CSS, and JavaScript
* Firebase Authentication Integration
* Cloud Firestore Database Management
* Real-Time Data Handling
* Responsive UI Design
* Event-Based Web Application Development
* Team Collaboration and Project Management

⸻

Live Demo

https://your-vercel-link.vercel.app

⸻

Authors

Tushar Banga
B.Tech Computer Engineering
J.C. Bose University of Science and Technology, YMCA

⸻

License

This project was developed for educational and competition purposes during Digi Week at J.C. Bose University of Science and Technology, YMCA.