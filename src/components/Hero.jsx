// components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero is-fullheight">
      {/* Hero content */}
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-white">
            Your Amazing Hotel Experience Awaits
          </h1>
          <h2 className="subtitle is-4 has-text-white">
            Discover the best hotels in breathtaking destinations.
          </h2>
          <a
            href="/"
            className="button is-primary is-large"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Hero background (image or video) */}
      <figure className="hero-background">
        {/* Image background */}
        {/* <img src="path/to/your/image.jpg" alt="Hero Background" /> */}
        
        {/* Video background (uncomment the code below and replace the video source) */}
        {/* <video
          playsInline
          autoPlay
          muted
          loop
          poster="path/to/your/poster.jpg"
        >
          <source src="path/to/your/video.mp4" type="video/mp4" />
        </video> */}
      </figure>
    </section>
  );
};

export default Hero;
