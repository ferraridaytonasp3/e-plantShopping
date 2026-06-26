import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsData = [
  // Category 1: Air Purifying Plants
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        id: 1,
        name: 'Peace Lily',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e4de3?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 2,
        name: 'Spider Plant',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1600411833114-f34b7d9aee60?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 3,
        name: 'Snake Plant',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1620803366004-119b57f54cd6?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 4,
        name: 'Aloe Vera',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 5,
        name: 'Boston Fern',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1631377819268-d716cd610cd2?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 6,
        name: 'Bamboo Palm',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=60',
      },
    ],
  },
  // Category 2: Tropical Plants
  {
    category: 'Tropical Plants',
    plants: [
      {
        id: 7,
        name: 'Monstera Deliciosa',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 8,
        name: 'Bird of Paradise',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 9,
        name: 'Fiddle Leaf Fig',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 10,
        name: 'Philodendron',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1608208150632-73fc3c3b28ea?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 11,
        name: 'Calathea Orbifolia',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1598977823962-5f20ac96dbca?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 12,
        name: 'Anthurium',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1616407903285-9ec59c4a43c2?w=400&auto=format&fit=crop&q=60',
      },
    ],
  },
  // Category 3: Succulent & Cacti
  {
    category: 'Succulents & Cacti',
    plants: [
      {
        id: 13,
        name: 'Echeveria',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 14,
        name: 'Jade Plant',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 15,
        name: 'Barrel Cactus',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 16,
        name: 'Haworthia',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1585688870019-a7dd45a7e3b1?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 17,
        name: 'String of Pearls',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1615869442320-fd02a129c77c?w=400&auto=format&fit=crop&q=60',
      },
      {
        id: 18,
        name: 'Prickly Pear Cactus',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1564839236736-a9f47eece8c1?w=400&auto=format&fit=crop&q=60',
      },
    ],
  },
];

function ProductList({ onNavigateCart, onNavigateHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">🌿 Paradise Nursery</span>
        <ul className="navbar-links">
          <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>Home</a></li>
          <li><a href="#plants">Plants</a></li>
          <li>
            <a href="#" className="cart-icon" onClick={(e) => { e.preventDefault(); onNavigateCart(); }}>
              🛒 <span className="cart-count">{cartCount}</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Plant Categories */}
      {plantsData.map((category) => (
        <div key={category.category} className="category-section" id="plants">
          <h2 className="category-title">{category.category}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <div className="plant-info">
                  <p className="plant-name">{plant.name}</p>
                  <p className="plant-price">${plant.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
