# 🚗 SmartRide — Angular Ride Sharing Web App

SmartRide is a ride-sharing platform built with Angular to help users share their rides, reduce traffic congestion, and promote eco-friendly commuting.

## 🌍 Purpose

With increasing urban traffic and environmental concerns, SmartRide connects drivers and riders traveling in the same direction, helping reduce redundant vehicle usage and lowering carbon footprints.

---

## 🚀 Features

### 🧑‍💼 Rider Flow
- Sign up / Log in
- Enter pickup & drop locations
- View available rides (List & Map)
- Request a ride
- Live tracking during the ride
- Complete the ride

### 🚘 Driver Flow
- Sign up / Log in
- Add new ride (route, time)
- Set available seats & fare
- Publish ride
- Receive and manage requests
- Live tracking during the ride
- Complete the ride and rate riders

### 🔁 Common Features
- Profile Management
- Ride History (Past & Upcoming)
- In-app Chat / Messaging
- Notifications (Push / Email)
- Settings (Availability, Preferences)

---

## 🛠️ Tech Stack

- **Frontend**: Angular 19 (Standalone Components, Signals, Routing)
- **State Management**: Reactive Forms, Component Store
- **Backend (Mock/Dev)**: JSON Server or Node.js (API simulation)
- **UI**: Responsive design for desktop & mobile
- **Other**: Google Maps / Mapbox for location tracking

---

## 📡 Backend (Mock API)

This project uses `json-server` as a lightweight mock backend to simulate API requests during development.

### 🔧 Start JSON Server

```bash
# Install json-server globally if not already installed
npm install -g json-server

# Start the mock server locally
json-server --watch db.json

# OR to access from other devices on the same network
json-server --watch db.json --host 192.168.1.75 --port 3000
```

# OR to access from other devices on your local network
```
ng serve --open --host=192.168.1.75
```

# (In a new terminal) Start the mock backend server
```
json-server --watch db.json --host 192.168.1.75 --port 3000
```
