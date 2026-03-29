import ProductCard from "./ProductCard";
import "./productGrid.css";

export default function ProductGrid({ products, showFilters }) {
  return (
    <div
      className={`product-grid ${
        showFilters ? "with-sidebar" : "full-grid"
      }`}
    >
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}