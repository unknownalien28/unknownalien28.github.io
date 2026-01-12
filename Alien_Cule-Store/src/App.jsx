import React from "react";
import "./App.css";
import HeroSlider from "./components/HeroSlider";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <HeroSlider />

      {/* Product Listing */}
      <ProductList />
    </div>
  );
}

export default App;
