import React, { useState } from 'react';
import ProductList from './ProductList';

const mockProducts = [
  { id: 1, name: 'Lipstick', price: '₹499', description: 'Long-lasting matte lipstick' },
  { id: 2, name: 'Foundation', price: '₹799', description: 'Full coverage liquid foundation' },
  { id: 3, name: 'Mascara', price: '₹399', description: 'Waterproof voluminous mascara' },
  { id: 4, name: 'Eyeshadow Palette', price: '₹999', description: 'Palette with 12 vibrant shades' },
  { id: 5, name: 'Blush', price: '₹349', description: 'Natural-looking blush powder' },
];

const Dashboard = () => {
  const [products] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search makeup products..."
        value={searchTerm}
        onChange={handleFilter}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Dashboard;
