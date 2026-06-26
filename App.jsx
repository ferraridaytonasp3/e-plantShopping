import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/CartSlice';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

function AppContent() {
  const [page, setPage] = useState('landing'); // 'landing' | 'products' | 'cart'

  if (page === 'products') {
    return <ProductList onNavigateCart={() => setPage('cart')} onNavigateHome={() => setPage('landing')} />;
  }

  if (page === 'cart') {
    return <CartItem onContinueShopping={() => setPage('products')} onNavigateHome={() => setPage('landing')} />;
  }

  // Landing page
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>Bring nature indoors. Discover our beautiful collection of houseplants.</p>
        <button className="get-started-btn" onClick={() => setPage('products')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
