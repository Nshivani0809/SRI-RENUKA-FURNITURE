import React, { useState } from 'react';
import './Product.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dealer brands with actual furniture brand images
  const dealers = [
    { 
      name: 'Relaxwell Mattresses', 
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/WI/MX/TY/14868902/relaxwell-mattress.jpeg',
      logo: 'https://cdn-icons-png.flaticon.com/512/3081/3081612.png',
      description: 'Premium Quality Mattresses'
    },
    { 
      name: 'Peps', 
      image: 'https://images.jdmagicbox.com/comp/bangalore/w9/080pxx80.xx80.190327124532.v2w9/catalogue/peps-industries-ltd-vijayanagar-bangalore-home-decorators-6c0g7zr9j9.jpg',
      logo: 'https://cdn-icons-png.flaticon.com/512/3081/3081612.png',
      description: 'Leading Furniture Brand'
    },
    { 
      name: 'Cimus', 
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/JM/XX/SK/14936074/cimus-sofa-set.jpeg',
      logo: 'https://cdn-icons-png.flaticon.com/512/3081/3081612.png',
      description: 'Modern Furniture Solutions'
    },
    { 
      name: 'Nilkamal', 
      image: 'https://www.nilkamalfurniture.com/wp-content/uploads/2021/05/Nilkamal-Furniture-Logo.png',
      logo: 'https://cdn-icons-png.flaticon.com/512/3081/3081612.png',
      description: 'Trusted Since 1950'
    },
    { 
      name: 'Cello', 
      image: 'https://www.celloworld.com/images/logo.png',
      logo: 'https://cdn-icons-png.flaticon.com/512/3081/3081612.png',
      description: 'Innovative Designs'
    }
  ];

  // All products with correct categories
  const products = [
    // SOFAS (category: 'sofas')
    { id: 1, name: 'Luxury Fabric Sofa', price: 44999, originalPrice: 59999, category: 'sofas', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', rating: 4.8, badge: 'Best Seller' },
    { id: 2, name: 'Modern L-Shape Sofa', price: 64999, originalPrice: 84999, category: 'sofas', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', rating: 4.9, badge: '-24%' },
    { id: 3, name: 'Leather Recliner Sofa', price: 79999, originalPrice: 99999, category: 'sofas', image: 'https://images.unsplash.com/photo-1505843490538-5132c6c7d0e1?w=600', rating: 4.7, badge: 'Premium' },
    { id: 4, name: 'Velvet 3-Seater Sofa', price: 54999, originalPrice: 69999, category: 'sofas', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600', rating: 4.8, badge: 'New' },
    { id: 5, name: 'Chesterfield Sofa', price: 89999, originalPrice: 119999, category: 'sofas', image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600', rating: 4.9, badge: 'Luxury' },
    
    // BEDS (category: 'beds')
    { id: 6, name: 'King Size Wooden Bed', price: 54999, originalPrice: 74999, category: 'beds', image: 'https://images.unsplash.com/photo-1616594039964-ae9021e400b0?w=600', rating: 4.8, badge: 'Best Seller' },
    { id: 7, name: 'Queen Size Bed with Storage', price: 44999, originalPrice: 59999, category: 'beds', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600', rating: 4.7, badge: 'Storage' },
    { id: 8, name: 'Single Bed with Mattress', price: 22999, originalPrice: 29999, category: 'beds', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600', rating: 4.6, badge: 'Budget' },
    { id: 9, name: 'Upholstered King Bed', price: 69999, originalPrice: 89999, category: 'beds', image: 'https://images.unsplash.com/photo-1540518614846-7ededae35a2f?w=600', rating: 4.9, badge: 'Luxury' },
    { id: 10, name: 'Four Poster Bed', price: 79999, originalPrice: 109999, category: 'beds', image: 'https://images.unsplash.com/photo-1505693314120-0d443867893c?w=600', rating: 4.8, badge: 'Premium' },
    
    // DINING (category: 'dining')
    { id: 11, name: '6 Seater Dining Set', price: 44999, originalPrice: 59999, category: 'dining', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600', rating: 4.7, badge: 'Popular' },
    { id: 12, name: '8 Seater Dining Table', price: 64999, originalPrice: 84999, category: 'dining', image: 'https://images.unsplash.com/photo-1617098900591-3f9090b5cec9?w=600', rating: 4.8, badge: 'Family' },
    { id: 13, name: 'Marble Top Dining Table', price: 74999, originalPrice: 99999, category: 'dining', image: 'https://images.unsplash.com/photo-1577738019429-6a3e210d0b56?w=600', rating: 4.9, badge: 'Premium' },
    
    // OFFICE CHAIRS (category: 'office')
    { id: 14, name: 'Executive Office Chair', price: 15999, originalPrice: 24999, category: 'office', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600', rating: 4.8, badge: 'Best Seller' },
    { id: 15, name: 'High Back Mesh Chair', price: 12999, originalPrice: 19999, category: 'office', image: 'https://images.unsplash.com/photo-1589384267710-7a170981ca78?w=600', rating: 4.7, badge: 'Ergonomic' },
    { id: 16, name: 'Premium Leather Chair', price: 24999, originalPrice: 34999, category: 'office', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600', rating: 4.9, badge: 'Premium' },
    
    // TABLES (category: 'tables')
    { id: 17, name: 'Study Table with Drawer', price: 8999, originalPrice: 12999, category: 'tables', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600', rating: 4.6, badge: 'Student' },
    { id: 18, name: 'Computer Desk', price: 11999, originalPrice: 16999, category: 'tables', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600', rating: 4.7, badge: 'Gaming' },
    { id: 19, name: 'Coffee Table', price: 14999, originalPrice: 19999, category: 'tables', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600', rating: 4.8, badge: 'Living Room' },
    
    // STORAGE (category: 'storage')
    { id: 20, name: '4 Door Wardrobe', price: 48999, originalPrice: 64999, category: 'storage', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600', rating: 4.8, badge: 'Best Seller' },
    { id: 21, name: 'Dressing Table with Mirror', price: 18999, originalPrice: 24999, category: 'storage', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600', rating: 4.6, badge: 'Vanity' },
    { id: 22, name: 'Steel Almirah', price: 22999, originalPrice: 29999, category: 'storage', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', rating: 4.7, badge: 'Secure' },
    
    // MATTRESSES (category: 'mattresses')
    { id: 23, name: 'Orthopedic King Mattress', price: 25999, originalPrice: 35999, category: 'mattresses', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600', rating: 4.9, badge: 'Best Seller' },
    { id: 24, name: 'Memory Foam Mattress', price: 19999, originalPrice: 29999, category: 'mattresses', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600', rating: 4.8, badge: 'Comfort' }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '📦', count: products.length },
    { id: 'sofas', name: 'Sofas', icon: '🛋️', count: products.filter(p => p.category === 'sofas').length },
    { id: 'beds', name: 'Beds', icon: '🛏️', count: products.filter(p => p.category === 'beds').length },
    { id: 'dining', name: 'Dining', icon: '🍽️', count: products.filter(p => p.category === 'dining').length },
    { id: 'office', name: 'Office Chairs', icon: '💺', count: products.filter(p => p.category === 'office').length },
    { id: 'tables', name: 'Tables', icon: '📐', count: products.filter(p => p.category === 'tables').length },
    { id: 'storage', name: 'Storage', icon: '🗄️', count: products.filter(p => p.category === 'storage').length },
    { id: 'mattresses', name: 'Mattresses', icon: '🛌', count: products.filter(p => p.category === 'mattresses').length }
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  console.log('Selected Category:', selectedCategory);
  console.log('Filtered Products Count:', filteredProducts.length);

  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Our Furniture Collection</h1>
        <p>Discover premium quality furniture for every room in your home</p>
      </div>

      {/* Dealer Brands Section */}
      <div className="dealer-brands-section">
        <div className="container">
          <span className="section-badge">Authorized Dealers</span>
          <h2 className="section-title">Premium Brands <span className="highlight">We Deal</span></h2>
          <div className="dealer-brands-grid">
            {dealers.map((dealer, index) => (
              <div key={index} className="dealer-brand-card">
                <div className="brand-logo">
                  <img src={dealer.image} alt={dealer.name} onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/100x100?text=' + dealer.name.charAt(0);
                  }} />
                </div>
                <h3>{dealer.name}</h3>
                <p>{dealer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="products-container">
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-name">{cat.name}</span>
              <span className="cat-count">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid-page">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card-page">
              {product.badge && <div className="product-badge-page">{product.badge}</div>}
              <div className="product-image-page">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="product-overlay-page">
                  <a href="tel:9515725394" className="enquire-btn-page">
                    Enquire Now
                  </a>
                </div>
              </div>
              <div className="product-info-page">
                <h3>{product.name}</h3>
                <div className="product-rating-page">
                  <span className="stars">⭐ {product.rating}</span>
                </div>
                <div className="product-price-page">
                  <span className="current-price">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <a href="tel:9515725394" className="call-now-btn">
                  📞 Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category. Please check back later!</p>
          </div>
        )}
      </div>

      {/* Quick Contact Bar */}
      <div className="quick-contact-bar">
        <div className="container">
          <span>📞 Need help? Call us:</span>
          <a href="tel:9515725394">9515725394</a>
          <a href="tel:738699590">738699590</a>
          <a href="tel:8688429739">8688429739</a>
        </div>
      </div>
    </div>
  );
};

export default Products;