import ProductCard from "./ProductCard";
import "./productGrid.css";

export default function ProductGrid() {
  // dummy products for layout
  const items = new Array(12).fill(0);

  return (
    <div className="product-grid">
      {items.map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
}