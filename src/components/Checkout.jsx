import React from 'react';

const Checkout = ({ total }) => {
  const handleCheckout = () => {
    alert(`Checkout successful! Total: $${total}`);
  };

  return (
    <div className="checkout">
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
