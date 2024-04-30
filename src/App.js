import React, { useState } from 'react';
import './styles.css';
import ProductCatalogue from './ProductCatalogue';
import ShoppingCart from './ShoppingCart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <div className="content">
        <ProductCatalogue addToCart={addToCart} />
        <ShoppingCart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default App;



