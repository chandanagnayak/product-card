import React from 'react';

const Product = ({ product, addToCart }) => {
  const { id, name, price, image } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;

