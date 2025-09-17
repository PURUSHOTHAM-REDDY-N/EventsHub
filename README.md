# EVENTSHUB  
*Transforming Events, Empowering Experiences Everywhere*  

<div align="center" style="display:flex;flex-direction:row; justify-content:center;">

![last-commit](https://img.shields.io/github/last-commit/PURUSHOTHAM-REDDY-N/EventsHub?style=flat&logo=git&logoColor=white&color=0080ff)  ![repo-top-language](https://img.shields.io/github/languages/top/PURUSHOTHAM-REDDY-N/EventsHub?style=flat&color=0080ff)  ![repo-language-count](https://img.shields.io/github/languages/count/PURUSHOTHAM-REDDY-N/EventsHub?style=flat&color=0080ff)  
</div>
<div align="center">

**Built with:**  

![JSON](https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white)  ![Markdown](https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white)  ![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)   ![React](https://img.shields.io/badge/ReactNative-61DAFB.svg?style=flat&logo=React&logoColor=black)  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white)  
![Formik](https://img.shields.io/badge/Formik-2563EB.svg?style=flat&logo=Formik&logoColor=white)  ![Expo](https://img.shields.io/badge/Expo-000020.svg?style=flat&logo=Expo&logoColor=white)  ![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white)  

</div>  

---

## 📑 Table of Contents
- [Overview](#overview)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [Testing](#testing)  

---

## 🚀 Overview  
**EventsHub** is a powerful open-source framework for building scalable, cross-platform mobile event management applications. It combines robust configuration, seamless navigation, and a rich set of reusable components to accelerate development and ensure maintainability.  

### Why EventsHub?  
This project simplifies mobile app development with:  

- 🎯 **🧩 Modular Architecture:** Organized layout, navigation, and component structure for scalable development.  
- 🚀 **🔧 Build & Deployment:** Streamlined configuration with Expo and EAS for efficient cross-platform releases.  
- 🌐 **🌟 Rich UI Components:** Custom buttons, forms, validation, and media handling for engaging user experiences.  
- 🔔 **📱 Real-time Engagement:** Firebase integration for notifications, messaging, and user interaction.  
- 🔍 **🛠 Utility Support:** Core utilities for data handling, storage, and API communication to boost productivity.  

---

## 🚀 Features

- 🔐 **Authentication**
  - User onboarding, signup, login, and verification
  - Secure form validations

- 🎉 **Event Management**
  - Create new events
  - Edit hosted events
  - View detailed event pages
  - Manage purchased tickets

- 🎟 **Ticketing**
  - Create and manage tickets (free & paid)
  - Ticket purchase flow with success screen
  - Ticket details with QR / event data

- 👤 **User Profile**
  - Edit profile information
  - View purchased tickets
  - Access created events
  - Manage account settings

- 🔎 **Utilities**
  - Search bar for events
  - Pagination for event browsing
  - Country picker & date-time picker

---
## 📂 Project Structure

```
└── 📁EventsHub
    └── 📁app
        └── 📁components # Reusable UI components
            └── 📁atoms # Buttons, Inputs, Avatars, etc.
            └── 📁forms # Auth & Event forms
            └── 📁validations # Validation schemas
        └── 📁data # Static data (onboarding, etc.)
        └── 📁screens # App screens (auth, main, events, tickets)
        └── 📁utils # API services, storage, helpers
    └── 📁assets # Animations, fonts, and images
    └── 📁constants # Theme, icons, images, constants
    ├── app.json # Expo app configuration
    ├── babel.config.js # Babel configuration
    ├── eas.json # Expo Application Services config
    ├── package.json # Project dependencies
    ├── README.md # Project documentation
    └── tsconfig.json # TypeScript configuration
```

## 🛠 Getting Started  

### ✅ Prerequisites  
Make sure you have the following installed:  
- **Programming Language:** JavaScript  
- **Package Manager:** [npm](https://www.npmjs.com/)  
- **Expo Setup:** [Expo Docs](https://docs.expo.dev/router/installation/)

### 📦 Installation  
Make  Sure you are running Backend Server [EventsHubBackend](https://github.com/PURUSHOTHAM-REDDY-N/eventsHubBackend)

Clone and set up the project:  

```sh
# Clone the repository
git clone https://github.com/PURUSHOTHAM-REDDY-N/EventsHub

# Navigate into project directory
cd EventsHub

# Install dependencies
npm install

# Start the development server
npx expo start

# Run on your device or emulator
Scan the QR code in the Expo Go app (iOS/Android)
Or run with:

npx expo run:android
npx expo run:ios

