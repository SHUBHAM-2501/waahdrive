import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="container">
        <a
          href="https://wa.me/918908870213"
          className="contact-link whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          <span>WhatsApp: +918908870213</span>
        </a>
        <a
          href="mailto:email.waahdrive.in"
          className="contact-link"
        >
          <FaEnvelope />
          <span>Email: email.waahdrive.in</span>
        </a>
        <a
          href="tel:+918908870213"
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