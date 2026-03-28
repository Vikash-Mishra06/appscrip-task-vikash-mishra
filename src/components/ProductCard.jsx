"use client";

import { useState } from "react";
import "./productCard.css";

export default function ProductCard({ product }) {
  // state for wishlist heart
  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="card-content">

        <h3 className="product-title">
          {product.title}
        </h3>

        <div className="row">
        <p className="login-text">
          Sign in or Create an account to see pricing
        </p>
          {/* Updated to use Remix Icon classes */}
          <i 
            className={`heart ${liked ? "ri-heart-3-fill active" : "ri-heart-3-line"}`}
            onClick={() => setLiked(!liked)}
          ></i>
          </div>

        </div>

      </div>


  );
}