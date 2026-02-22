import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productsData from "../../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListingPage.css";

export default function ProductListingPage() {
  const { categoryName } = useParams();

  useEffect(() => {
    document.title = `${categoryName}`;
  }, [categoryName]);

  const [visibleCount, setVisibleCount] = useState(20);
  const [sortType, setSortType] = useState("A-Z"); 
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);

  const baseCategoryProducts = productsData.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase(),
  );

  const sidebarFiltered = baseCategoryProducts.filter((product) => {
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(product.color);
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    return matchesColor && matchesPrice;
  });

  const sortedProducts = [...sidebarFiltered].sort((a, b) => {
    if (sortType === "price-low") return a.price - b.price;
    if (sortType === "price-high") return b.price - a.price;
    if (sortType === "A-Z") return a.name.localeCompare(b.name);
    if (sortType === "Z-A") return b.name.localeCompare(a.name);
    return 0;
  });

  const displayedProducts = sortedProducts.slice(0, visibleCount);
  const hasMore = visibleCount < sidebarFiltered.length;

  return (
    <div className="plp-container">
      <aside className="sidebar">
        <h3>Filter By</h3>

        <div className="filter-section">
          <h4>Price</h4>
          <div className="price-slider-container">
            <div className="price-visualization">
              <svg viewBox="0 0 200 50" preserveAspectRatio="none">
                <path
                  d="M0,50 Q40,0 100,40 T200,50 L200,50 L0,50 Z"
                  fill="#baffc9"
                  opacity="0.6"
                />
              </svg>
            </div>

            <div className="range-input">
              <input
                type="range"
                min="0"
                max="200"
                value={minPrice || 0}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
              <input
                type="range"
                min="0"
                max="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="price-input-boxes">
            <div className="input-field">
              <span>$</span>
              <input
                type="number"
                value={minPrice || 0}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
            </div>
            <span className="separator">-</span>
            <div className="input-field">
              <span>$</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="filter-section">
          <h4 style={{ marginBottom: "10px" }}>Color</h4>
          {["Black", "Brown", "Blue", "Red", "Indigo", "White"].map((color) => (
            <div key={color} className="filter-option">
              <input className="checkbox"
                type="checkbox"
                id={color}
                checked={selectedColors.includes(color)}
                onChange={() =>
                  setSelectedColors((prev) =>
                    prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
                  )
                }
              />
              <label htmlFor={color}>{color}</label>
            </div>
          ))}
        </div>
      </aside>

      <main className="main-content">
        <header className="plp-header">
          <div className="category-details">
            <h1>{categoryName.toUpperCase()}</h1>
            <p>Explore our high-quality {categoryName} collection.</p>{" "}
          </div>

          <select
            className="sort-dropdown"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="A-Z">Alphabetical (A-Z)</option>
            <option value="Z-A">Alphabetical (Z-A)</option> 
            <option value="price-low">Price (Low to High)</option>{" "}
            <option value="price-high">Price (High to Low)</option>{" "}
          </select>
        </header>

        <p className="product-counter">
          {displayedProducts.length} out of {sidebarFiltered.length} products
          displayed.
        </p>

        <div className="product-grid">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {hasMore && (
          <div className="btn-container">
            <button
              className="load-more-btn"
              onClick={() => setVisibleCount((prev) => prev + 20)}
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </div>
  );
}