import React, { useState, useEffect } from "react";
import { AllProductCard, Pagination } from "../../components";
import Slider from "@mui/material/Slider";
import { useGetAllProductsQuery } from "../../redux/services/ProductData";
import { useNavigate  , useLocation } from 'react-router-dom'; // Corrected import

const ProductsPage = () => {
  const location = useLocation();
  const navigate = useNavigate ();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get("p")) || 1;
  const [value, setValue] = useState(200);
  const { data, refetch } = useGetAllProductsQuery(page);

  useEffect(() => {
    const handlePageChange = () => {
      const newPage = parseInt(new URLSearchParams(location.search).get("page")) || 1;
      if (newPage !== page) {
        refetch({ page: newPage });
      }
    };

  

   
  }, [location.search, navigate, page, refetch]);

  const total = data?.totalDocs;
  const limit = data?.limit;

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <div className="grid gap-8 px-4 py-8 md:grid-cols-[280px_1fr] md:px-6 md:py-12">
      <div className="rounded-lg bg-gray-100/40 p-6 dark:bg-gray-800/40">
        <div className="grid gap-6">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Nike ,T-Shirt..."
              required
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
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Price Range</h3>
            <div className="mt-4 grid gap-4">
              <div className="flex items-center gap-2">
                <div style={{ width: "100%" }}>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    min={0}
                    max={1000}
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
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* {products.map((product, index) => (
          <AllProductCard key={index} {...product} />
        ))} */}
        {data?.docs?.map((product, index) => (
          <AllProductCard key={index} {...product} />
        ))}
       

      </div>
      <div className="grid">
        {console.log(data)}
          <Pagination total={total} limit={limit} currentPage={page} />
        </div>
    </div>
  );
};

export default ProductsPage;
