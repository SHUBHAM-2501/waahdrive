import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="container">
        <a
          href="https://wa.me/1234567890"
          className="contact-link whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          <span>WhatsApp: +916370182716</span>
        </a>
        <a
          href="mailto:info@carrental.com"
          className="contact-link"
        >
          <FaEnvelope />
          <span>Email: info@carrental.com</span>
        </a>
        <a
          href="tel:+1234567890"
          className="contact-link phone"
        >
          <FaPhone />
          <span>Phone: +918908870213</span>
        </a>
      </div>
    </div>
  );
};

export default ContactBar;