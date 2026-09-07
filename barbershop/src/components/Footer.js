import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div>
          <h3>Visit Us</h3>
          <p>123 Main St, Douglasville, GA</p>
          <p>Call: (123) 456‑7890</p>
        </div>

        <div>
          <h3>Hours</h3>
          <p>Mon–Fri: 9 AM – 7 PM</p>
          <p>Sat: 8 AM – 5 PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>

      <div className="socials">
        <a href="#">Facebook</a> | <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
