import React from 'react';

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>Price:</strong> {product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
