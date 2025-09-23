# WonderLust

WonderLust is a full-stack web application for listing, reviewing, and managing travel destinations or accommodations. It features user authentication, CRUD operations for listings and reviews, and a modern UI. This README provides a comprehensive guide from setup to deployment.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Scripts](#scripts)
- [Folder Overview](#folder-overview)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- User authentication (signup, login, logout)
- Create, read, update, delete (CRUD) listings
- Add and manage reviews for listings
- Error handling and flash messages
- Responsive UI with EJS templates

## Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** EJS, CSS, JavaScript
- **Database:** (Add your DB, e.g., MongoDB)
- **Other:** Cloud configuration, custom middleware

## Project Structure
```
app.js                # Main application entry point
cloudConfig.js        # Cloud configuration (e.g., for file uploads)
middleware.js         # Custom Express middleware
package.json          # Project dependencies and scripts
script.js             # (Utility or startup script)

controller/           # Route controllers
init/                 # Initialization scripts/data
model/                # Mongoose models (or ORM models)
public/               # Static assets (CSS, JS)
routes/               # Express route definitions
utils/                # Utility functions and error handling
views/                # EJS templates
```

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/SudeepKarthik30/WonderLust.git
   cd WonderLust
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add required variables (see below).

## Environment Variables
Add a `.env` file with the following (example):
```
PORT=3000
DATABASE_URL=your_database_url
SESSION_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Running the App
```sh
npm start
```
Or, for development with auto-reload:
```sh
npm run dev
```

## Scripts
- `npm start` — Start the server
- `npm run dev` — Start with nodemon (if configured)

## Folder Overview
- **controller/**: Business logic for listings, reviews, users
- **init/**: Data seeding and initialization
- **model/**: Database models (listing, user, reviews)
- **public/**: Static files (CSS, JS)
- **routes/**: Express route handlers
- **utils/**: Error handling and async wrappers
- **views/**: EJS templates for UI

## API Endpoints
- `/listings` — View all listings
- `/listings/new` — Create a new listing
- `/listings/:id` — View a single listing
- `/listings/:id/edit` — Edit a listing
- `/review` — Add or manage reviews
- `/user` — User authentication routes

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

---

**Contact:** For questions, open an issue or contact [SudeepKarthik30](https://github.com/SudeepKarthik30).
