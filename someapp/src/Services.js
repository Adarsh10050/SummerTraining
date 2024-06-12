import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div>
      <div className="lost-and-found-container">
        <h2><b>Lost & Found</b></h2>
        <div className="lost-and-found-content">
          <div className="item">
            <h3>Search Listings</h3>
            <p>Explore our listings to find lost items and belongings near your location.</p>
          </div>
          <div className="item">
            <h3>Report Found Items</h3>
            <p>Found something? Report it here so we can help reunite it with its owner.</p>
          </div>
          <div className="item">
            <h3>Community Support</h3>
            <p>Join our community to support others in finding their lost items and spread kindness.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Lost & Found. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
