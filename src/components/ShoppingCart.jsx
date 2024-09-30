import React from 'react';
import jsPDF from 'jspdf';

const ShoppingCart = ({ cart, resetCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.text('Mahesh Coffee Cafe', 20, 20);

    // Date
    const today = new Date();
    doc.setFontSize(10);
    doc.text(`Date: ${today.toLocaleDateString()}`, 20, 30);

    // Products Table
    doc.setFontSize(14);
    doc.text('Item', 20, 50);
    doc.text('Price (Rs.)', 160, 50);
    
    let yPosition = 60;
    cart.forEach((product, index) => {
      doc.text(`${index + 1}. ${product.name}`, 20, yPosition);
      doc.text(`Rs. ${product.price}`, 160, yPosition);
      yPosition += 10;  // Adjust line spacing
    });

    // Total
    doc.setFontSize(16);
    doc.text(`Total: Rs. ${totalPrice}`, 20, yPosition + 10);

    // Save the PDF
    doc.save('MaheshCoffeeCafe-bill.pdf');

    // Alert the user and reset the cart
    alert('Your bill has been downloaded successfully!');
    resetCart(); // Call the function to reset the cart
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - Rs. {product.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: Rs. {totalPrice}</h3>

      {/* Checkout Button */}
      <div className="checkout">
        <button onClick={generatePDF}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
