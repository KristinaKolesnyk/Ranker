### Frontend (React) README

---

# Ranker Frontend

Ranker is a web application that allows users to create lists, compare items, and organize tournaments to determine the best item. The frontend is built using **React** for creating dynamic and responsive user interfaces.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Screenshots & Videos](#screenshots--videos)
- [Contributing](#contributing)

## Features

- **Create and manage lists**: Users can create and organize lists of items across different categories.
- **Compare items**: The app allows users to compare items based on specific criteria.
- **Tournament system**: Users can set up tournaments where items compete in rounds until a winner is determined.
- **Real-time updates**: Changes are reflected dynamically without requiring page reloads.
- **Responsive design**: The UI is optimized for both desktop and mobile devices.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ranker-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ranker-frontend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode at `http://localhost:3000`. The page reloads automatically when you make changes.
- **`npm test`**: Launches the test runner in the interactive watch mode.
- **`npm run build`**: Builds the app for production, bundling the files for deployment.
- **`npm run eject`**: Ejects the app, giving full control over the configuration.

## Technologies

- **React**: The main library for building the frontend.
- **React Router DOM**: Handles navigation between pages.
- **SweetAlert2**: Provides elegant alerts and popups.
- **Particles-bg**: Adds background effects to enhance the visual experience.
- **Tachyons**: A functional CSS framework for styling.
- **PostgreSQL**: Integration for data storage (via API).
- **Node.js & Express**: Backend REST API for data fetching and updates.

## Project Structure

```
/src
  /components   # Reusable UI components
  /pages        # Individual pages like SignIn, SignUp, BracketPage, etc.
  /services     # API calls and data fetching logic
  /assets       # Static files like images and fonts
  /screenshots  # Contains screenshots and demo videos of the site
```

## Screenshots & Videos

A folder called **`/screenshots`** has been added to the project root. It contains several images and videos demonstrating the user interface and the tournament system functionality of the Ranker application.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

---
