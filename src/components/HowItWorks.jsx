// components/HowItWorks.js
import React from 'react';

const howItWorksData = [
  {
    id: 1,
    icon: 'fas fa-search-location', // Replace with your Font Awesome class for the search icon
    title: 'Step 1',
    description: 'Browse and select your preferred destination.',
  },
  {
    id: 2,
    icon: 'fas fa-calendar-alt', // Replace with your Font Awesome class for the calendar icon
    title: 'Step 2',
    description: 'Choose your desired dates and hotel amenities.',
  },
  {
    id: 3,
    icon: 'fas fa-check-circle', // Replace with your Font Awesome class for the check-circle icon
    title: 'Step 3',
    description: 'Review and confirm your booking details.',
  },
  {
    id: 4,
    icon: 'fas fa-credit-card', // Replace with your Font Awesome class for the credit card icon
    title: 'Step 4',
    description: 'Complete the payment securely online.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works section">
      <div className="container">
        <h2 className="how-it-works-title title is-2">How It Works</h2>
        <div className="columns is-multiline">
          {howItWorksData.map((step) => (
            <div key={step.id} className="column is-one-quarter">
              <div className="how-it-works-card card">
                <div className="how-it-works-card-content card-content">
                  <i className={step.icon}></i>
                  <p className="step-title title is-5">{step.title}</p>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
