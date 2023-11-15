import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedHotels from './components/FeaturedHotels';
import SpecialOffers from './components/SpecialOffers';
import PopularDestinations from './components/PopularDestinations';
import UserReviews from './components/UserReviews';
import HowItWorks from './components/HowItWorks';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          {/* Contact Information */}
          <div className="column is-one-third">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>

          {/* Social Media Links */}
          <div className="column is-one-third">
            <h3>Follow Us</h3>
            <ul className="social-media-list">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              {/* Add more social media links as needed */}
            </ul>
          </div>

          {/* Copyright and Legal */}
          <div className="column is-one-third">
            <h3>Legal</h3>
            <p>&copy; 2023 Your Hotel Name</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};



function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <FeaturedHotels/>
      <SpecialOffers/>
      <PopularDestinations/>
      <UserReviews/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}

export default App;
