// src/Contact.js
import React, { useState } from "react";
import "./Contact.css"; // Assuming you'll have a separate CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (dummy action here)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        We'd love to hear from you! Please reach out with any questions,
        feedback, or concerns.
      </p>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Our Location</h3>
        <p>123 Travel Street, Wanderlust City, Dreamland</p>
        <p>Call us: 1-800-123-4567</p>
        <p>Email: contact@travel-site.com</p>
      </div>
    </div>
  );
};

export default Contact;
