import React from 'react';

const ProductCard = ({ title, image, price }) => {
  return (
    <>
        <div className="relative w-full h-full group overflow-hidden rounded-lg shadow-lg">
      {/* <Link className="absolute inset-0 z-10" href="#">
        <span className="sr-only">View</span>
      </Link> */}
      <img
        alt="Product Image"
        className="object-cover w-full h-[250px] md:h-[300px] group-hover:scale-105 transition-transform duration-300"
        height={400}
        src={image}
        style={{
          aspectRatio: "400/400",
          objectFit: "cover",
        }}
        width={400}
      />
      <div className="absolute flex flex-wrap align-middle text-center justify-center inset-x-0 bottom-0 bg-gray-900/80 text-white px-8 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <button className=" h-full w-auto p-3  rounded-sm"> Add To Card</button>
        
      </div>
      
    </div>
    <div className="text-center">
    <div className="font-bold te text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">${price.toFixed(2)}</p>
  </div>
  </>  
      
    
  );
};

export default ProductCard;
