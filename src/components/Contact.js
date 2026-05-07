import React from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '', email: '', phone: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page-new">
      <div className="contact-hero-new">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="contact-container-new">
        <div className="contact-grid-new">
          <div className="contact-info-new">
            <div className="info-card-new">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <a href="tel:9515725394">9515725394</a>
              <a href="tel:738699590">738699590</a>
              <a href="tel:8688429739">8688429739</a>
            </div>
            <div className="info-card-new">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>Plot No.15, Surya PPR Towers</p>
              <p>Opp Saket Towers, Near Ganesh Temple</p>
              <p>Saket Road, ECIL Post, Hyderabad-500062</p>
            </div>
            <div className="info-card-new">
              <div className="info-icon">⏰</div>
              <h3>Business Hours</h3>
              <p>Mon-Sat: 10AM - 8PM</p>
              <p>Sunday: 11AM - 6PM</p>
            </div>
          </div>

          <div className="contact-form-new">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;