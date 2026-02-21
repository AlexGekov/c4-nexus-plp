import "./ProductCard.css";


const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <p className="product-desc">{product.description}</p>
        
        <div className="product-rating">
          {renderStars(product.rating)}
        </div>

        <div className="product-price">
          {product.discountPrice ? (
            <>
              <span className="current-price">${product.discountPrice}</span>
              <span className="old-price">${product.price}</span>
            </>
          ) : (
            <span className="current-price">${product.price}</span>
          )}
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;