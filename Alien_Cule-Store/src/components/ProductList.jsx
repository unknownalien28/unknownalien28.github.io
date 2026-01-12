import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Top Club Jerseys</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
