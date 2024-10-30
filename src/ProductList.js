import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './App.css';

const ProductList = ({ startIndex, itemCount }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?skip=${startIndex}&limit=${itemCount}`)
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error(error));
  }, [startIndex, itemCount]);

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;