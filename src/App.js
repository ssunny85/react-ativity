import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from "./Product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('https://api.mohaji.com/product/v1/deal/weekly');
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Product products={products} />
    </div>
  );
}

export default App;
