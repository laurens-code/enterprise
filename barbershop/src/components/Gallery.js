import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>

      <div className="gallery-grid">
        {[1, 2, 3, 4].map((photo) => (
          <div key={photo} className="photo"></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
