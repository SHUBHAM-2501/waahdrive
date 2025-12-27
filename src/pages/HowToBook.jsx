import React from 'react';
import { FaCheckCircle, FaIdCard, FaFileContract, FaPhone } from 'react-icons/fa';
import ContactBar from '../components/ContactBar';
import { FaCar } from 'react-icons/fa6';

const HowToBook = () => {
  const steps = [
    {
      icon: <FaCheckCircle className="step-icon-green" />,
      title: "Choose Your Car",
      description: "Browse our collection and select the perfect car for your needs."
    },
    {
      icon: <FaPhone className="step-icon-blue" />,
      title: "Contact Us",
      description: "Call or WhatsApp us to check availability and discuss details."
    },
    {
      icon: <FaIdCard className="step-icon-purple" />,
      title: "Confirm Details",
      description: "Provide date, location, and required documents."
    },
    {
      icon: <FaCar className="step-icon-red" />,
      title: "Deposit & Confirm Pickup",
      description: "Complete the deposit and pickup the car."
    },
    {
      icon: <FaCheckCircle className="step-icon-green" />,
      title: "Enjoy Your Ride",
      description: "Pick up your car and enjoy your journey!"
    },
    {
      icon: <FaFileContract className="step-icon-red" />,
      title: "Make Payment",
      description: "Complete the payment and sign the rental agreement."
    },
  ];

  return (
    <div>
      {/* Contact bar with WhatsApp, email, and phone links */}
      <ContactBar />
      <div className="booking-steps">
        <div className="container">
          <h1>How to Book</h1>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className="additional-info">
            <h2>Additional Information</h2>
            <div className="info-grid">
              <div className="info-section">
                <h3>Required Documents</h3>
                <ul>
                  <li>Valid Driver's License</li>
                  <li>Identity Proof (Aadhar/Passport)</li>
                  <li>Address Proof</li>
                </ul>
              </div>
              <div className="info-section">
                <h3>Rental Terms & Conditions</h3>
                <ul>
                  <li>Minimum age: 18 years</li>
                  <li>Valid license</li>
                  <li>Security deposit required</li>
                </ul>
              </div>
              <div className="info-section">
                <h3>Cancellation Policy</h3>
                <ul>
                  <li>Free cancellation 24 hours before pickup</li>
                  <li>50% charge for cancellation within 24 hours</li>
                  <li>No refund for no-show</li>
                </ul>
              </div>
              <div className="info-section">
                <h3>Support Contact</h3>
                <p>
                  For any queries, contact us at:<br />
                  Phone: +918908870213<br />
                  WhatsApp: +918908870213<br />
                  Email: helpdesk@waahdrive.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBook;