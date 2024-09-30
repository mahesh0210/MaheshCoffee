import React, { useState } from 'react';
import ProductList from './components/ProductList';
import icon from './assets/icon.png';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <div className='Logo'>
        <img src={icon}></img>
        <h1>Mahesh Coffee Cafe</h1>
      </div>
      <ProductList addToCart={addToCart} />
      <ShoppingCart cart={cart} />
    </div>
  );
};

export default App;
