import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">{product.club}</p>
        <p className="text-green-600 font-semibold">{product.price}</p>
        {product.isNew && <span className="text-xs text-blue-500">New!</span>}
        {product.isTrending && (
          <span className="text-xs text-red-500 ml-2">🔥 Trending</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
