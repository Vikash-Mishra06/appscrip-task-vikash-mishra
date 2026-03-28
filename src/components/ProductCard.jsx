import "./productCard.css";

export default function ProductCard() {
  // static card for layout building
  return (
    <div className="product-card">

      <div className="image-container">
        <img
          src="https://via.placeholder.com/150"
          alt="product image"
        />
      </div>

      <h3 className="product-title">
        Product Name
      </h3>

      <p className="product-price">
        $100
      </p>

    </div>
  );
}