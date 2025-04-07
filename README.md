# 🗓️ Virtual Meeting Slot Reservation System

A fullstack MERN application that allows users to reserve 15-minute meeting slots within designated time ranges. Built with **Nodejs** **React**, **Express**, **MongoDB**, and **Docker**.

---

## Features

- View available meeting slots (10:00 AM – 3:00 PM & 3:45 – 5:45 PM)
- Book a time slot by submitting name and email
- Booked slots are marked and disabled
- Supports "consumable slots" (each slot can be booked only once)
- Built with Vite + Material UI on the frontend
- Dockerized for easy deployment and local development

---

## Tech Stack

- **Frontend:** React (Vite), Material UI, Axios, Nginx (for serving)
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Database:** MongoDB
- **Containerization:** Docker & Docker Compose

---

## 🐳 Getting Started with Docker

### Prerequisites:
- Docker and Docker Compose installed

### Steps:

1. Clone the repo:
   
   - git clone (HTTPS link)
   - cd (root) 

2. Install dependencies
### Frontend
- cd client
- npm install

### Backend
- cd server
- npm install


## 🛠 Environment Setup

- Before running the app, create a `.env` file in the server directory.
- The .env file should contain the following variables:
	•	PORT — the port for the Express server (default: 3001)
	•	MONGO_URI — your MongoDB connection string
** this can be provided upon request.. **


3. Run the app:
   - docker compose up --build
   

4.	Open in browser:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001/bookings   

## Assumptions & Decisions
	•	Only one user can book a specific time slot (consumable slots)
	•	Used Material UI for a quick, clean UI
	•	Built time ranges: Morning: (10:00 AM – 3:00 PM) and Afternoon: (3:45 – 5:45) PM
	•	Docker used to streamline local dev and deployment
	•	No user authentication in this version (public booking only)
