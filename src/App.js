import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ProductList from "./ProductList";


const App = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemCount, setItemCount] = useState(5);

  return (
    <div>
      <h1>Product List</h1>
      <input
        type="number"
        value={startIndex}
        onChange={(e) => setStartIndex(e.target.value)}
        placeholder="Start Index"
      />
      <input
        type="number"
        value={itemCount}
        onChange={(e) => setItemCount(e.target.value)}
        placeholder="Item Count"
      />
      <ProductList startIndex={startIndex} itemCount={itemCount} />
    </div>
  );
};

export default App;
