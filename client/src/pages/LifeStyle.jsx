import React from "react";
// bg-[url("/src/assets/img/sport_bg.jpg")]
import LifestyleSection from "../components/LifeStyle/LifestyleSection";
import ProductCard from "../components/Product/ProductSection";
import appl from "../assets/Products/applWatch.png";

const lifestyles = [
  {
    imgSrc: "/src/assets/img/sport_bg.jpg",
    title: "Lifestyle 1",
    description: "Description of lifestyle 1.",
    lastUpdated: "3 mins ago",
  },
  {
    imgSrc: "/src/assets/img/sport_bg.jpg",
    title: "Lifestyle 2",
    description: "Description of lifestyle 2.",
    lastUpdated: "5 mins ago",
  },
  {
    imgSrc: "/src/assets/img/sport_bg.jpg",
    title: "Lifestyle 2",
    description: "Description of lifestyle 2.",
    lastUpdated: "5 mins ago",
  },
];

const LifeStyle = () => {
  return (
    <div>
      <h1 className="
      text-center text-3xl p-6 font-bold text-gray-800 dark:text-gray-100 md:text-6xl
      "> All life Style</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-16 mx-8">
        <LifestyleSection lifestyles={lifestyles} />

        {/* Product section */}
        <div className="p-10">
          <p className="
          text-start text-lg mb-2 font-semibold text-gray-800 dark:text-gray-100 
          "> Produtcts Related:</p>
          <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap xs:justify-center ">
            
              <ProductCard  />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeStyle;
