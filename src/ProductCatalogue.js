import React from 'react';
import Product from './Product';

const ProductCatalogue = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'NIKE', price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-lCYp_qVaCXVSlj1u6gelZlq0nTerAOV8lL8zIycWw&s' },
    { id: 2, name: 'PUMA', price: 20, image: 'https://www.shutterstock.com/image-photo/varna-bulgaria-may-4-2020-260nw-1780686011.jpg' },
    { id: 3, name: 'ADIDAS', price: 30, image: 'https://www.shutterstock.com/image-photo/kent-uk-01012023-adidas-originals-600nw-2278627365.jpg' },
  ];

  return (
    <div className="catalogue">
      <h2>Product Catalogue</h2>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductCatalogue;

