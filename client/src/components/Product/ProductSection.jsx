
import appl from '../../assets/Products/applWatch.png'

import React from 'react';



const ProductCard = () => {
    const products = [
        {
          imgSrc: "/src/assets/Products/applWatch.png",
          name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          rating: 5,
          price: 599,
        },
      
        {
          imgSrc: "/src/assets/Products/applWatch.png",
          name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          rating: 5,
          price: 599,
        },
        {
          imgSrc: "/src/assets/Products/applWatch.png",
          name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          rating: 5,
          price: 599,
        },
        {
          imgSrc: "/src/assets/Products/applWatch.png",
          name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          rating: 5,
          price: 599,
        },
      
        // Add more products as needed
      ];
      return (
        <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap xs:justify-center">
          {products.map((product, index) => (
            <div key={index} className="flex flex-wrap w-full max-w-xs bg-slate-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="p-4 rounded-t-lg" src={`${product.imgSrc}`} alt="product image" />
              </a>
              <div className="px-3 pb-3">
                <a href="#">
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{product.description}</p>
                <div className="flex items-center mt-2 mb-2">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(product.rating)].map((_, index) => (
                      <svg key={index} className="w-3 h-3 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">{product.rating}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">${product.price}</span>
                  <a href="#" className="text-white text-xs  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-sm md:px-2 md:py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Product</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
};

export default ProductCard;
