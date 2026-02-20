import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductListingPage from "./components/ProductsListingPage/ProductListingpage";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenEls = document.querySelectorAll(".hidden");
    hiddenEls.forEach((el) => observer.observe(el));
  });

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to="/Catalog/Bags" />} />

        <Route
          path="/Catalog/:categoryName"
          element={<ProductListingPage key={window.location.pathname} />}
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
}
