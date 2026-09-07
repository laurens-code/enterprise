import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        D's CUTZ <span>CLASSIC BARBER SHOP</span>
      </div>

      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <a href="#booking" className="btn-primary">Book Appointment</a>
    </header>
  );
};

export default Navbar;
