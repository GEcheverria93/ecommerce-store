import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = getProducts();
    setProducts(fetchedProducts);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

