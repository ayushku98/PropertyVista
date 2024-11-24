// Footer.js
import React from "react";
import "../components/Footer.css";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Content Section */}
      <div className="footer-content">
        {/* Branding Section */}
        <div className="footer-brand">
          <h2>MyRealEstate</h2>
          <p>Your global partner for real estate solutions. Explore properties worldwide with trust and transparency.</p>
        </div>

        {/* Navigation Section */}
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <FaPhoneAlt /> +1 234 567 890 (USA)
            </li>
            <li>
              <FaPhoneAlt /> +91 987 654 3210 (India)
            </li>
            <li>
              <FaEnvelope /> contact@myrealestate.com
            </li>
            <li>
              <FaMapMarkerAlt /> 123 Broadway, New York, NY 10001, USA
            </li>
            <li>
              <FaMapMarkerAlt /> 45 MG Road, Indore, MP 452001, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 MyRealEstate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
