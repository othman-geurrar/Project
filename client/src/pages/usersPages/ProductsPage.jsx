import React, { useState, useEffect } from "react";
import { AllProductCard, Footer, IntsaFollow, MainNav, NavBaar, NavBar, Pagination, ProductCard, ProductsCategory } from "../../components";
import Slider from "@mui/material/Slider";
import { useGetAllProductsQuery } from "../../redux/services/ProductData";
import { useNavigate  , useLocation } from 'react-router-dom'; // Corrected import
import { GiRunningShoe  } from "react-icons/gi";
import { GiArmoredPants } from "react-icons/gi";
import { IoShirtSharp } from "react-icons/io5";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import ProductCard1 from "../../components/userFlow/ProductCard1";



const ProductsPage = () => {
  const [search , setSearch] = useState('');
  const location = useLocation();
  const navigate = useNavigate ();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get("p")) || 1;
   
  
  const min = 12
  const [value, setValue] = useState("");
  console.log(value)
  const { data, refetch } = useGetAllProductsQuery({page , search ,min , value});
  console.log(data);
 

  useEffect(() => {
    
    const handlePageChange = () => {
      const newPage = parseInt(new URLSearchParams(location.search).get("page")) || 1;
      if (newPage !== page) {
        refetch({ page: newPage, search, min, max: value });
      }
    };
    handlePageChange();

   
  }, [location.search, refetch, page, search, min, value]);

  const total = data?.totalDocs;
  const limit = data?.limit;

  // const handleChange = (event, newValue) => {
  //   if (typeof newValue === "number") {
  //     setValue(newValue);
  //   }
  // };

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    navigate(`?search=${newSearch}&page=1&min=${min}&max=${value}`);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    navigate(`?search=${search}&page=1&min=${min}&max=${newValue}`);
  };

  return (
    <>
    <NavBaar />
    {/* <div className="pl-34 mt-14 hidden md:block"> 
    <ProductsCategory />

    </div> */}
    <div className="grid gap-8 mt-26 px-4 py-8 md:grid-cols-[280px_1fr] md:px-6 md:py-4">
      <div className="rounded-lg bg-gray-100/40 p-4 dark:bg-gray-800/40">
        <div className="grid gap-6">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Nike ,T-Shirt..."
              onChange={({ currentTarget: input }) => handleSearchChange(input.value)}
            />
            <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 w-fit rounded-lg bg-gray-400 px-3 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="h-4 w-4 text-white dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="mt-4 grid gap-2">
              {/* Category links */}
              <div>
              <button
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                onClick={()=> setSearch('')}
              >
                
                All
              </button>
              <div className="grid gap-2 mt-4">
              <button
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                onClick={()=> setSearch('T-shirt')}
              >
                <IoShirtSharp className="w-5 h-5" />
                Shirts
              </button>
              <button
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                onClick={()=> setSearch('Pants')}
                
              >
                <GiArmoredPants className="w-5 h-5" />
                Pants
              </button>
              <button
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                onClick={()=> setSearch('Shoes')}
              >
                <GiRunningShoe className="w-5 h-5" />
                Shoes
              </button>
              <button
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                onClick={()=> setSearch('Accessories')}
              >
                {/* <img src="https://cdn-icons-png.freepik.com/512/7695/7695934.png" className="w-5 h-5" /> */}
                <FontAwesomeIcon icon={faGem} />
                Accessories
              </button>
            </div>
          </div>
          <div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Price Range</h3>
            <div className="mt-4 grid gap-4">
              <div className="flex items-center gap-2">
                <div style={{ width: "100%" }}>
                  <Slider
                    value={value}
                    onChange={handleSliderChange}
                    min={0}
                    max={5000}
                    step={50}
                    valueLabelDisplay="auto"
                  />
                  <div className="text-sm font-medium">$0 - $1000</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Colors</h3>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {/* Color options */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-red-500" />
                <span className="text-sm font-medium">Red</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 mr-1 rounded-full bg-green-500" />
                <span className="text-sm  font-medium">Green</span>
              </div>
             
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-500" />
                <span className="text-sm font-medium">Blue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gray-500" />
                <span className="text-sm font-medium">Gray</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-black" />
                <span className="text-sm font-medium">Black</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-yellow-500" />
                <span className="text-sm font-medium">Black</span>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      
        
        {data?.docs?.map((product, index) => (
          // <AllProductCard key={index} {...product} />
          <ProductCard1 key={index} {...product} />
        ))}
       

      </div>
      <div className="grid">
        {console.log(data)}
          <Pagination total={total} limit={limit} currentPage={page} search={search}  />
        </div>
    </div>
    
    <div>
      <Footer />
    </div>
    </>
  );
};

export default ProductsPage;


function AccessibilityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="https://cdn-icons-png.freepik.com/512/7695/7695934.png"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
}


function PocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
      <polyline points="8 10 12 14 16 10" />
    </svg>
  )
}


function ShirtIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}


function StickerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
      <path d="M14 3v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h0" />
      <path d="M16 13h0" />
      <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
    </svg>
  )
}