Project Summary: Product Listing Page (PLP)
1. What Has Been Implemented
The solution provides a fully functional, high-performance e-commerce product listing interface that includes:

Dynamic Product Rendering: A grid-based display of 120 products categorized into Bags, Shoes, Denim, and Jewelry.

Advanced Filtering System: A sticky sidebar featuring a custom dual-handle price range slider (with data visualization) and custom-designed color checkboxes.

Intelligent Sorting: A dropdown menu allowing users to sort products by Name (A-Z, Z-A) and Price (Low to High, High to Low).

Pagination ("Load More"): An incremental loading system that displays 20 products at a time to optimize initial page weight.

Responsive Layout: A fluid design that transitions from a side-by-side desktop view to a stacked mobile view, ensuring usability across all devices.

2. Technologies Used
React (v18+): The core library used for building the component-based user interface.

React Router DOM: Employed for category-based routing and parameter handling (useParams).

JavaScript (ES6+): Used for complex data manipulation, including filtering and sorting algorithms.

CSS3 (Flexbox & Grid): Used to create the structured product tiles and the responsive page architecture.

SVG & CSS Masking: Utilized for the advanced UI elements like the price density wave and the footer "wiggle" design.

3. How the Solution Was Achieved
Derived State Logic: To prevent performance issues like "cascading renders," the filtering and sorting logic was implemented by calculating values directly from the base dataset during render, rather than storing duplicate data in the state.

Component Remounting with Keys: To ensure the UI (filters, price, and count) resets perfectly when a user switches categories, a unique key based on the URL path was applied to the main component in App.jsx.

CSS Sticky Positioning: The position: sticky property was used for both the header and the sidebar to keep navigation and filtering tools accessible during long scrolls through the 120-item catalog.

Custom Range Logic: Since standard HTML sliders only support one handle, a dual-handle system was achieved using two overlapping transparent range inputs synced to a shared state.

4. Challenges Encountered
Cascading Render Errors: An initial challenge involved calling setState inside a useEffect to sync filtered data, which triggered linter warnings. This was resolved by switching to derived state logic.

Flexbox Alignment: Aligning the sorting dropdown with the baseline of the category heading required fine-tuning align-items and margin-top to ensure a consistent look even when no products were returned by filters.

