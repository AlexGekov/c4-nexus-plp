import { useParams } from "react-router-dom";
import { useState } from "react"; // [cite: 25] useEffect is no longer needed
import productsData from "../../../data/products.json";
import ProductCard from "../ProductCart/ProductCart";
import "./ProductListingPage.css";

export default function ProductListingPage() {
  const { categoryName } = useParams();

  // Initial States - These reset automatically on remount due to the 'key' in App.jsx
  const [visibleCount, setVisibleCount] = useState(20); // [cite: 63, 64]
  const [sortType, setSortType] = useState("A-Z"); // [cite: 82]
  const [selectedColor, setSelectedColor] = useState(""); // [cite: 74]
  const [maxPrice, setMaxPrice] = useState(200); // [cite: 74]

  // 1. Category Filtering Logic: Get the base set for this route [cite: 48, 50]
  const baseCategoryProducts = productsData.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase(),
  );

  // 2. Sidebar Filtering Logic: Filter by color and price [cite: 73, 74]
  const sidebarFiltered = baseCategoryProducts.filter((product) => {
    const matchesColor = selectedColor === "" || product.color === selectedColor;
    const matchesPrice = product.price <= maxPrice;
    return matchesColor && matchesPrice;
  });

  // 3. Sorting Logic: Reorder the filtered list [cite: 82-87]
  const sortedProducts = [...sidebarFiltered].sort((a, b) => {
    if (sortType === "price-low") return a.price - b.price;
    if (sortType === "price-high") return b.price - a.price;
    if (sortType === "A-Z") return a.name.localeCompare(b.name);
    if (sortType === "Z-A") return b.name.localeCompare(a.name);
    return 0;
  });

  // 4. Pagination Logic: Only show the "page" of products [cite: 92, 95, 96]
  const displayedProducts = sortedProducts.slice(0, visibleCount);
  const hasMore = visibleCount < sidebarFiltered.length; // [cite: 97]

  return (
    <div className="plp-container">
      {/* Sidebar on the left [cite: 75] */}
      <aside className="sidebar">
        <h3>Filter By</h3>

        {/* Price Filter: Slider [cite: 77] */}
        <div className="filter-section">
          <h4>Max Price: ${maxPrice}</h4>
          <input
            type="range"
            min="0"
            max="200"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        {/* Color Filter: Checkboxes [cite: 76] */}
        <div className="filter-section">
          <h4>Color</h4>
          {["Black", "Brown", "Blue", "Red", "Indigo", "White"].map((color) => (
            <div key={color} className="filter-option">
              <input
                type="checkbox"
                id={color}
                checked={selectedColor === color}
                onChange={() => setSelectedColor(selectedColor === color ? "" : color)}
              />
              <label htmlFor={color}>{color}</label>
            </div>
          ))}
        </div>
      </aside>

      <main className="main-content">
        <header className="plp-header">
          <div className="category-details">
            <h1>{categoryName.toUpperCase()}</h1> {/* [cite: 90] */}
            <p>Explore our high-quality {categoryName} collection.</p> {/* [cite: 91] */}
          </div>

          {/* Sorting Dropdown [cite: 81] */}
          <select
            className="sort-dropdown"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="A-Z">Alphabetical (A-Z)</option> {/* [cite: 84] */}
            <option value="Z-A">Alphabetical (Z-A)</option> {/* [cite: 85] */}
            <option value="price-low">Price (Low to High)</option> {/* [cite: 86] */}
            <option value="price-high">Price (High to Low)</option> {/* [cite: 87] */}
          </select>
        </header>

        {/* Product Counter [cite: 57, 58] */}
        <p className="product-counter">
          {displayedProducts.length} out of {sidebarFiltered.length} products displayed.
        </p>

        {/* Product Grid [cite: 59, 60] */}
        <div className="product-grid">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button [cite: 92, 95] */}
        {hasMore && (
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount((prev) => prev + 20)}
          >
            Load More
          </button>
        )}
      </main>
    </div>
  );
}