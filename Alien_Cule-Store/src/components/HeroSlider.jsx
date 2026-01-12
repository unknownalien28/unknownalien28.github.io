import React, { useEffect, useState } from "react";
import products from "../data/products";

const HeroSlider = () => {
  const featured = products.filter((p) => p.isTrending || p.isNew);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % featured.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [featured.length]);

  if (featured.length === 0) return null;

  return (
    <div className="w-full h-72 overflow-hidden relative">
      <img
        src={featured[index].image}
        alt={featured[index].name}
        className="w-full h-full object-cover transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-white text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            {featured[index].name}
          </h2>
          <p className="text-sm md:text-lg">{featured[index].club}</p>
          <p className="mt-2 font-semibold">{featured[index].price}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
