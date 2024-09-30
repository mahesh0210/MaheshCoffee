import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Americano', price: 365, description: 'A strong and bold espresso with hot water for a smooth finish.' },
  { id: 2, name: 'Cappuccino', price: 485, description: 'A perfect balance of espresso, steamed milk, and frothy foam.' },
  { id: 3, name: 'Latte', price: 650, description: 'A creamy combination of espresso and steamed milk, topped with a touch of foam.' },
  { id: 4, name: 'Mocha', price: 560, description: 'A delicious blend of espresso, chocolate, and steamed milk.' },
  { id: 5, name: 'Flat White', price: 520, description: 'A smooth and velvety blend of espresso and steamed milk.' },
  { id: 6, name: 'Macchiato', price: 475, description: 'Espresso with a splash of steamed milk, strong and satisfying.' },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
