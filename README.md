HTML Form with Server-Side Rendering (Node.js + Express + EJS)
📌 Project Objective

This project demonstrates basic server-side rendering (SSR) and form submission handling using Node.js, Express, and EJS.

The goal is to understand how:

HTML forms send data to a server

The server processes user input

Dynamic HTML is generated on the server and sent back to the client

🛠️ Technologies Used

Node.js – JavaScript runtime

Express.js – Web framework for Node.js

EJS (Embedded JavaScript) – Template engine for server-side rendering

HTML – Form structure

📂 Project Structure
project/
│
├── views/
│   ├── index.ejs        # Form page
│   └── result.ejs       # Result page (dynamic content)
│
├── app.js               # Main server file
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation

🚀 Features

User input form (Name & Email)

POST request handling using Express

Server-side rendering using EJS

Dynamic HTML generation based on user input

⚙️ Installation & Setup
1️⃣ Clone or Download the Project
git clone <repository-url>
cd project

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
node app.js

4️⃣ Open in Browser
http://localhost:3000

🧠 How It Works (Flow)

User opens the form page (GET /)

User submits the form (POST /submit)

Express server receives form data

Server passes data to EJS template

EJS generates dynamic HTML

Browser displays the result page

📝 Sample Routes
Render Form Page
GET /

Handle Form Submission
POST /submit

📌 Learning Outcomes

By completing this project, you will understand:

Client–server interaction

HTTP GET vs POST

Express routing and middleware

Server-side rendering (SSR)

Template engines (EJS)

Basic backend project structure

🔮 Possible Enhancements

Add form validation

Add CSS styling

Use partials/layouts in EJS

Store data in a database

Convert to MVC architecture

👨‍💻 Author

Manikandan K# Nodejs-SSR-Form
