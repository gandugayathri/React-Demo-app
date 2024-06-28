import React from 'react';
import ProductDetails from './ProductDetails';
const ProductPage = () => {
  const productName = 'Andra Biryani';
  const price = '499.99';
  const description = 'This is Andra Special Delicious Biryani.';
  return (
    <div>
      <h1>Product Page</h1>
      <ProductDetails 
        productName={productName} 
        price={price} 
        description={description} 
      />
    </div>
  );
};

export default ProductPage;

