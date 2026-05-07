import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { id: 1, name: 'Eclipse Chair', price: '24,999', image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600', category: 'Chair' },
    { id: 2, name: 'Nova Sofa', price: '64,999', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600', category: 'Sofa' },
    { id: 3, name: 'Aura Cupboard', price: '54,999', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600', category: 'Cupboard' },
    { id: 4, name: 'Lumina Table', price: '44,999', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=600', category: 'Table' },
  ];

  const categories = [
    { name: 'Seating', sub: 'Chairs & Sofas', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500' },
    { name: 'Sleeping', sub: 'Beds & Mattresses', image: '/image/bed.jfif' },
    { name: 'Dining', sub: 'Tables & Chairs', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=500' },
    { name: 'Storage', sub: 'Wardrobes & More', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500' },
  ];

  const dealers = [
    { 
      name: 'Relaxwell', 
      fullName: 'Relaxwell Mattresses',
      tagline: 'MATTRESSES & PU FOAM',
      slogan: 'Never Stop Dreaming',
      image: '/image/relaxwell-mattress.png' 
    },
    { 
      name: 'Peps', 
      fullName: 'Peps',
      tagline: "INDIA'S FAVOURITE",
      slogan: 'Spring Mattress',
      image: '/image/peps.png' 
    },
    { 
      name: 'Cirrus', 
      fullName: 'Cirrus',
      tagline: 'Modern Furniture',
      slogan: 'Solutions',
      image: '/image/cirrus.png' 
    },
    { 
      name: 'Nilkamal', 
      fullName: 'Nilkamal',
      tagline: 'INTELLIGENT',
      slogan: 'SOLUTIONS',
      image: '/image/nilkamal.png' 
    },
    { 
      name: 'Cello', 
      fullName: 'Cello',
      tagline: 'Innovative',
      slogan: 'Designs',
      image: '/image/cello.png' 
    },
  ];

  return (
    <div className="home-minimal">
      {/* Hero Section */}
      <section className="hero-minimal">
        <div className="hero-bg" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-minimal">
          <div className="hero-text-minimal">
            <span className="hero-brand">SRI RENUKA FURNITURE</span>
            <h1 className="hero-title-minimal">
              Elevate your Space<br />
              with <span className="highlight">Premium Furniture</span>
            </h1>
            <div className="hero-buttons-minimal">
              <Link to="/products" className="btn-primary-minimal">Explore Collection →</Link>
              <a href="tel:9515725394" className="btn-outline-minimal">Call: 9515725394</a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Dealers Section */}
      <section className="dealers-professional-section">
        <div className="container-minimal">
          <div className="dealers-header">
            <span className="section-tag">AUTHORIZED PARTNERS</span>
            <h2>Premium Brands <span className="highlight">We Represent</span></h2>
            <p className="dealers-subtitle">Trusted brands. Unmatched quality.</p>
          </div>
          <div className="dealers-professional-grid">
            {dealers.map((dealer, index) => (
              <div key={index} className="dealer-professional-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="dealer-professional-logo">
                  <img src={dealer.image} alt={dealer.name} />
                </div>
                <div className="dealer-professional-info">
                  <h3>{dealer.name}</h3>
                  <p className="dealer-tagline">{dealer.tagline}</p>
                  <p className="dealer-slogan">{dealer.slogan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-minimal">
        <div className="container-minimal">
          <div className="section-header-minimal">
            <span className="section-tag">Featured Collection</span>
            <h2 className="section-title-minimal">Bestselling Pieces</h2>
            <p className="section-desc-minimal">Curated designs that blend comfort with contemporary aesthetics</p>
          </div>
          <div className="products-grid-minimal">
            {products.map((product, index) => (
              <div key={product.id} className="product-card-minimal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="product-image-minimal">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay-minimal">
                    <a href="tel:9515725394" className="product-link">Enquire Now →</a>
                  </div>
                </div>
                <div className="product-info-minimal">
                  <p className="product-cat">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="product-price">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="categories-minimal">
        <div className="container-minimal">
          <div className="section-header-minimal">
            <span className="section-tag">Shop by Category</span>
            <h2 className="section-title-minimal">Explore Our World</h2>
            <p className="section-desc-minimal">Discover furniture that tells your story</p>
          </div>
          <div className="categories-grid-minimal">
            {categories.map((cat, index) => (
              <Link to="/products" key={index} className="category-card-minimal">
                <div className="category-image-minimal">
                  <img src={cat.image} alt={cat.name} />
                  <div className="category-content-minimal">
                    <h3>{cat.name}</h3>
                    <p>{cat.sub}</p>
                    <span className="category-arrow">Shop Now →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-minimal">
        <div className="container-minimal">
          <div className="about-grid-minimal">
            <div className="about-text-minimal">
              <span className="section-tag">Our Story</span>
              <h2>32 Years of<br />Crafting Excellence</h2>
              <p>Since 1994, Sri Renuka Furniture has been transforming houses into homes. With over 2 million happy customers, we take pride in delivering furniture that combines timeless design with uncompromising quality.</p>
              <div className="about-stats">
                <div className="stat-minimal">
                  <span className="stat-num">32+</span>
                  <span className="stat-label">Years of Trust</span>
                </div>
                <div className="stat-minimal">
                  <span className="stat-num">2M+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat-minimal">
                  <span className="stat-num">100+</span>
                  <span className="stat-label">Designs</span>
                </div>
              </div>
            </div>
            <div className="about-image-minimal">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600" alt="Craftsmanship" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-minimal">
        <div className="container-minimal">
          <div className="cta-content-minimal">
            <h2>Visit Our Showroom</h2>
            <p>Experience the craftsmanship in person</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary-minimal">Get Directions →</Link>
              <a href="tel:9515725394" className="btn-outline-minimal white">Call Now</a>
            </div>
            <div className="cta-address-minimal">
              <p>Plot No.15, Surya PPR Towers, Opp Saket Towers, Near Ganesh Temple</p>
              <p>Saket Road, ECIL Post, Hyderabad-500062</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;