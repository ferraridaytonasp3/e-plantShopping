import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from './CartSlice';

function CartItem({ onContinueShopping, onNavigateHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (id) => dispatch(increaseQuantity(id));
  const handleDecrease = (id) => dispatch(decreaseQuantity(id));
  const handleRemove = (id) => dispatch(removeItem(id));

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Thank you for shopping at Paradise Nursery.');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">🌿 Paradise Nursery</span>
        <ul className="navbar-links">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>Home</a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); onContinueShopping(); }}>Plants</a>
          </li>
          <li>
            <a href="#" className="cart-icon">
              🛒 <span className="cart-count">{cartCount}</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="cart-page">
        <h2>🛒 Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty. Start adding some plants! 🌱</p>
            <br />
            <button className="continue-btn" onClick={onContinueShopping}>
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => handleDecrease(item.id)}>−</button>
                    <span className="qty-display">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => handleIncrease(item.id)}>+</button>
                    <button className="delete-btn" onClick={() => handleRemove(item.id)}>
                      🗑 Remove
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="cart-summary">
              <p className="cart-total">
                Total: <strong>${totalCost.toFixed(2)}</strong>
              </p>
              <div className="cart-actions">
                <button className="continue-btn" onClick={onContinueShopping}>
                  ← Continue Shopping
                </button>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
