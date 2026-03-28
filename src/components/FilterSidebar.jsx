import "./filterSidebar.css";

export default function FilterSidebar() {
  return (
    <aside className="sidebar">

      <h2>FILTERS</h2>

      <div className="filter-group">
        <p>Category</p>

        <label>
          <input type="checkbox" /> Bags
        </label>

        <label>
          <input type="checkbox" /> Shoes
        </label>

        <label>
          <input type="checkbox" /> Accessories
        </label>
      </div>

    </aside>
  );
}