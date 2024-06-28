import React from 'react';
const ProductDetails = ({ productName, price, description }) => {
  return (
    <div>
      <h2>{productName}</h2>
      <p>Price: {price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetails;
