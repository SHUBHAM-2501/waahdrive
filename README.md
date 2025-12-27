# Car Rental Service Website

A fully responsive Car Rental Service website built with React.js and Vite.

## Features

- **Responsive Design**: Mobile-first approach with desktop compatibility
- **Car Listings**: Display available cars with details and pricing
- **Contact Integration**: Direct WhatsApp, phone, and email links
- **Booking Process**: Step-by-step guide for booking cars
- **Modern UI**: Clean design with Tailwind CSS

## Tech Stack

- React 19
- Vite
- Plain CSS (mobile-first responsive design)
- React Router DOM
- React Icons

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ContactBar.jsx
│   ├── CarCard.jsx
│   ├── CarList.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   └── HowToBook.jsx
├── data/
│   └── cars.js
├── App.jsx
├── main.jsx
└── index.css
```

## Pages

- **Home**: Car listings with contact options
- **How to Book**: Booking process and additional information

## Responsive Design

- Mobile: Single column layout
- Tablet: 2-column grid
- Desktop: 3-column grid
- Touch-friendly buttons and navigation
