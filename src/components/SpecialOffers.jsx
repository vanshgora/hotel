// components/SpecialOffers.js
import React from 'react';
import './SpecialOffers.css';

const specialOffersData = [
  {
    id: 1,
    title: 'Early Bird Discount',
    description: 'Book in advance and save up to 20% on your stay.',
  },
  {
    id: 2,
    title: 'Weekend Getaway Package',
    description: 'Enjoy a special weekend rate with complimentary breakfast.',
  },
  // Add more special offers as needed
];

const SpecialOffers = () => {
  return (
    <div className="specialoffers">
    <section className="section">
      <div className="container">
        <h2 className="title is-2">Special Offers</h2>
        <div className="columns is-multiline">
          {specialOffersData.map((offer) => (
            <div key={offer.id} className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <p className="title is-4">{offer.title}</p>
                  <p className="subtitle is-6">{offer.description}</p>
                </div>
                <footer className="card-footer">
                  <a href="/" className="card-footer-item">
                    Learn More
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default SpecialOffers;
