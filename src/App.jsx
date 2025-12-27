import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowToBook from './pages/HowToBook';

// Main App component with routing setup
function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation bar at the top */}
        <Navbar />
        {/* Main content area that grows to fill available space */}
        <main className="main-content">
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} />
            {/* How to Book page route */}
            <Route path="/how-to-book" element={<HowToBook />} />
          </Routes>
        </main>
        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
