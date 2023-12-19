import React, { useState, useEffect } from "react";
import './ProductDisplay.css'

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="product-list">
    <div className="product-list-container">
      <h1> Products</h1>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <h4 className="product-title">{product.title}</h4>
            <p className="product-body">{product.body}</p>
          </li>
        ))}
        </ul>
    </div>
    </div>
  );
};
