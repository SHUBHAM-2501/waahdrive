import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/how-to-book');
  };

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <div className="car-card-content">
        <h3>{car.name}</h3>
        <div className="car-details">
          <p><strong>Price :</strong> ₹{car.pricePerKm} /24hr</p>
          <p><strong>Mileage:</strong> {car.mileage}</p>
          <p><strong>Kms Limit: </strong> {car.seats}</p>
          <p><strong>Extra Kms:</strong> ₹{car.luggage}</p>
          <p><strong>Fuel Type:</strong> {car.fuelType}</p>
          <p style={{ color: '#007bff' }}>Price is customisable as per the hours you need.</p>
        </div>
        <div className="car-buttons">
          <a
            href={`tel:${car.contactLinks.phone}`}
            className="btn btn-success"
          >
            <FaPhone /> +918908870213
          </a>
          <a
            href={`https://wa.me/${car.contactLinks.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <button
            onClick={handleBookNow}
            className="btn btn-primary"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;