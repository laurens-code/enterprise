import React from "react";

const Pricing = () => {
  const prices = [
    { name: "Men’s Haircut", price: "$30" },
    { name: "Beard Trim", price: "$20" },
    { name: "Razor Shave", price: "$25" },
    { name: "Kids Cut", price: "$20" },
  ];

  return (
    <section id="pricing" className="pricing">
      <h2>Price List</h2>

      <ul>
        {prices.map((item, index) => (
          <li key={index}>{item.name} — {item.price}</li>
        ))}
      </ul>

      <a href="#booking" className="btn-primary">Book Now</a>
    </section>
  );
};

export default Pricing;
