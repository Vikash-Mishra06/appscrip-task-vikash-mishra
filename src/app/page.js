import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import FilterSidebar from "@/components/FilterSidebar";
import "./page.css";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Header />

      <div className="layout">
        <FilterSidebar />
        <ProductGrid />
      </div>

    </main>
  );
}