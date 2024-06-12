import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add logic to send form data to backend or handle form submission here
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      ) : (
        <p className="confirmation-message">Thank you for your message! We'll get back to you shortly.</p>
      )}
    </div>
  );
};

export default Contact;
