const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="product-card">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: Rs. {product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
  