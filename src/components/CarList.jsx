import React from 'react';
import CarCard from './CarCard';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      <div className="container">
        <h2>Book your Drive</h2>
        <div className="car-grid">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;