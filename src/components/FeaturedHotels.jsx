// components/FeaturedHotels.js
import React from 'react';
import './FeaturedHotels.css';

const featuredHotelsData = [
  {
    id: 1,
    name: 'Luxury Resort',
    image: 'assets/chelsea-gates-0653_wY0nRc-unsplash.jpg',
    description: 'Indulge in luxury with breathtaking views.',
  },
  {
    id: 2,
    name: 'Cozy Cottage',
    image: 'assets/chelsea-gates-0653_wY0nRc-unsplash.jpg',
    description: 'Experience comfort and tranquility in a cozy cottage.',
  },
  // Add more hotel entries as needed
];

const FeaturedHotels = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-2">Featured Hotels</h2>
        <div className="columns is-multiline">
          {featuredHotelsData.map((hotel) => (
            <div key={hotel.id} className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={hotel.image} alt={hotel.name} />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">{hotel.name}</p>
                  <p className="subtitle is-6">{hotel.description}</p>
                </div>
                <footer className="card-footer">
                  <a href="/" className="card-footer-item">
                    Book Now
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
