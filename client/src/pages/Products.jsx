import React, { useState } from "react";
import img from "../assets/Products/applWatch.png";

// Example products data
const exampleProducts = [
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    technology: "Technology 1",
    price: "$100",
    imageUrl: "url_to_product_image_1.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category 2",
    technology: "Technology 2",
    price: "$200",
    imageUrl: "url_to_product_image_2.jpg", // Replace with actual image URL
  },
  // Add more example products as needed
];

const Product = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  return (
    <div>
      <div className="flex flex-col my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200">
        <div className="overflow-x-auto rounded-2xl">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="p-4 lg:p-5">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          aria-describedby="checkbox-1"
                          type="checkbox"
                          className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Technology
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Price
                    </th>
                    <th scope="col" className="p-4 lg:p-5"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Render example products */}
                  {exampleProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-100">
                      <td className="p-4 w-4 lg:p-5">
                        <div className="flex items-center">
                          <input
                            id={`checkbox-${product.id}`}
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                          />
                          <label
                            htmlFor={`checkbox-${product.id}`}
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                            <img
                              src={img}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-base font-semibold text-gray-900">
                              {product.name}
                            </div>
                            <div className="text-sm font-normal text-gray-500">
                              {product.category}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        {product.technology}
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        #{product.id}
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        {product.price}
                      </td>
                      <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                        <button
                          type="button"
                          onClick={() => openEditModal(product)}
                          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                        >
                          Edit item
                        </button>
                        <button
                          type="button"
                          data-modal-toggle="delete-product-modal"
                          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                        >
                          <svg
                            className="mr-2 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 4.293a1 1 0 00-1.414 1.414l10 10a1 1 0 001.414-1.414l-10-10z"
                              clipRule="evenodd"
                            ></path>
                            <path
                              fillRule="evenodd"
                              d="M14.707 5.707a1 1 0 00-1.414-1.414l-10 10a1 1 0 001.414 1.414l10-10z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Product;
