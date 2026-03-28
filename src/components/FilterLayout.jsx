"use client";

import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import "./filterLayout.css";

export default function FilterLayout({ products }) {
  // state to show/hide sidebar
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div>

      {/* toggle button */}
      <div className="filter-header">
        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="layout">
        {showFilters && <FilterSidebar />}
        <ProductGrid products={products} />
      </div>

    </div>
  );
}