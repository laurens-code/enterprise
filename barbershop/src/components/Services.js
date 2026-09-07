import React from "react";

const Services = () => {
  const items = ["Fades & Tapers", "Beard Sculpting", "Razor Shave", "Kids Cuts"];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {items.map((service, index) => (
          <div key={index} className="card">{service}</div>
        ))}
      </div>
    </section>
  );
};

export default Services;
