import "./SideBar.css";

export default function Sidebar({ onFilterChange }) {
  return (
    <div className="sidebar-content">
      <h3>Filters</h3>
      
      {/* Price Filter [cite: 74, 77] */}
      <div className="filter-group">
        <h4>Price Range</h4>
        <input 
          type="range" 
          min="0" 
          max="200" 
          onChange={(e) => onFilterChange('price', e.target.value)} 
        />
      </div>

      {/* Color Filter [cite: 74, 76, 78] */}
      <div className="filter-group">
        <h4>Color</h4>
        {['Black', 'Brown', 'Blue', 'Red'].map(color => (
          <label key={color}>
            <input 
              type="checkbox" 
              onChange={() => onFilterChange('color', color)} 
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );
};