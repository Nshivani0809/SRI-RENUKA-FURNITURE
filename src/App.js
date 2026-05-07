import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <h2>Sri Renuka Furniture</h2>
              <p>Premium Quality Furniture</p>
            </div>
            <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
              <li><a href="tel:9515725394" className="call-btn">Call: 9515725394</a></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Sri Renuka Furniture</h4>
              <p>Your Trusted Furniture Partner in Hyderabad since 1990</p>
              <p>Authorized Dealers: Relaxwell, Peps, Cimus, Nilkamal, Cello</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📞 9515725394</p>
              <p>📞 738699590</p>
              <p>📞 8688429739</p>
              <p>📍 Hyderabad - 500062</p>
            </div>
            <div className="footer-section">
              <h4>Business Hours</h4>
              <p>Mon-Sat: 10AM - 8PM</p>
              <p>Sunday: 11AM - 6PM</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Sri Renuka Furniture. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}

export default App;