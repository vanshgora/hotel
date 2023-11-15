// components/PopularDestinations.js
import React from 'react';
import './PopularDestinations.css';

const popularDestinationsData = [
  {
    id: 1,
    title: 'Paris, France',
    image: 'assets/futc-Re1Uc-eabi8-unsplash.jpg',
    description: 'Explore the romantic charm of the City of Lights.',
  },
  {
    id: 2,
    title: 'Tokyo, Japan',
    image: 'assets/futc-Re1Uc-eabi8-unsplash.jpg',
    description: 'Experience the futuristic blend of tradition and technology.',
  },
  // Add more destinations as needed
];

const PopularDestinations = () => {
  return (
    <section className="popular-destinations section">
      <div className="container">
        <h2 className="popular-destinations-title title is-2">Popular Destinations</h2>
        <div className="columns is-multiline">
          {popularDestinationsData.map((destination) => (
            <div key={destination.id} className="column is-one-third">
              <div className="destination-card card">
                <div className="destination-card-image card-image">
                  <figure className="image is-4by3">
                    <img src={destination.image} alt={destination.title} />
                  </figure>
                </div>
                <div className="destination-card-content card-content">
                  <p className="destination-title title is-4">{destination.title}</p>
                  <p className="destination-description subtitle is-6">{destination.description}</p>
                </div>
                <footer className="destination-card-footer card-footer">
                  <a href="/" className="explore-now-button card-footer-item button is-primary">
                    Explore Now
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

export default PopularDestinations;
