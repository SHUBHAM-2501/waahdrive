import React from 'react';
import ContactBar from '../components/ContactBar';
import CarList from '../components/CarList';
import { cars } from '../data/cars';

// Home page component displaying the car rental listings
const Home = () => {
  return (
    <div>
      {/* Contact bar with WhatsApp, email, and phone links */}
      <ContactBar />
      {/* List of available cars */}
      <CarList cars={cars} />
    </div>
  );
};

export default Home;