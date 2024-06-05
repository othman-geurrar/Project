/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Swal from "sweetalert2";
import React from "react";
import { useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  getproducts,
  updateproduct,
  toggleForm,
  addproduct,
} from "../../redux/Products/productsSlice";
import { Deletebutton } from "../../components/AdminBackLock/Product/DeleteProduct";
import Header from "../../components/AdminBackLock/Header";
import { FaBoxesStacked } from "react-icons/fa6";
import { Dropdown, Ripple, initTWE } from "tw-elements";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
// Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { z } from "zod";
import { Link } from "react-router-dom";
import { useGetAllLifeStyleQuery } from "../../redux/services/LifeStyleData";
function Products() {
  // ZOD
  const schema = z.object({
    name: z.string().min(4),
    category: z.string().min(3),
    productQuantity: z.string().transform((value) => Number(value)), // Convert string to number
    newPrice: z.string().transform((value) => Number(value)),
    oldPrice: z.string().transform((value) => Number(value)),
    stars: z.string().transform((value) => Number(value)), //
    inStock: z.string().transform((value) => (value === "true" ? true : false)),
    color: z.array(z.string()),
    LifeStyleName: z.string(),
  });
  const {
    data: lifestyles,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllLifeStyleQuery();
  if (isSuccess) {
    console.log(lifestyles);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  initTWE({ Dropdown, Ripple });

  const { error, isLoadingEditProduct, isLoadingproducts, products, showForm } =
    useSelector((state) => state.Products);
  //products size select
  const options = [
    { label: "Small", value: "S" },
    { label: "Meduim", value: "M" },
    { label: "Large", value: "L" },
    { label: "XLarge", value: "XL" },
  ];
  const handlechange = (selectedOption) => {
    setProductdata((prevState) => ({
      ...prevState,
      size: selectedOption,
    }));
  };
  //product_inputs
  const [productdata, setProductdata] = useState(null);
  const [addform, setaddform] = useState(false);
  const [editform, seteditform] = useState(false);
  //pagination
  const [productId, setproductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setproductsPerPage] = useState(5);
  const indexOfLastorder = currentPage * productsPerPage;
  const indexOfFirstorder = indexOfLastorder - productsPerPage;
  const pageNumber = [];
  const currentproducts = products.slice(indexOfFirstorder, indexOfLastorder);
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumber.push(i);
  }
  console.log(productdata);
  // imageupload
  const [images, setImage] = useState([]);
  const uploadImage = async () => {
    try {
      const urls = [];
      // Iterate over each image and upload
      for (const image of images) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "lpkk0jkj");
        formData.append("folder", "Cloudinary-React");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/duvf9j212/image/upload",
          formData
        );
        urls.push(response.data.url);
      }
      console.log(urls);

      return urls;
    } catch (err) {
      console.error("Error uploading images: ", err);
      return [];
    }
  };

  const handlephoto = (e) => {
    // Convert FileList to Array
    const filesArray = Array.from(e.target.files);
    // Set images state
    setImage(filesArray);
    console.log(filesArray);
  };

  const dispatch = useDispatch();
  // console.log(addform);
  const OnSubmit = async (formData) => {
    console.log(formData);
    // Wait for image upload to finish
    const imageUrls = await uploadImage();
    formData.imageURL = imageUrls;
    formData.size = productdata.size;
    setImage(null);
    dispatch(toggleForm());
    if (editform) dispatch(updateproduct({ productdata: formData, productId }));
    console.log(formData);
    if (addform) dispatch(addproduct(formData));
    reset();
    setProductdata(null);
  };

  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  return (
    <>
      <div className="p-[50px] rounded-3xl overflow-x-auto ">
        <Header category="Page" title="Products" />
        {isLoadingproducts ? (
          <>
            <div className="flex items-center justify-center">
              <span className="mr-[20px]">Products Uploading</span>
              <span className="loading loading-spinner text-accent"></span>
            </div>
          </>
        ) : error ? (
          <>
            <div role="alert" className="alert alert-error flex  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </>
        ) : (
          <>
            <div className="max-w-[85rem]  mx-auto ">
              <div className="flex flex-col ">
                {/* overflow-x-scroll */}
                <div className="-m-1.5 ">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm ">
                      {/* search_addd_filtre */}
                      <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center rounded-tl-xl rounded-tr-xl border-b bg-customGreen">
                        <div className="sm:col-span-1">
                          <label
                            htmlFor="hs-as-table-product-review-search"
                            className="sr-only"
                          >
                            Search
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="hs-as-table-product-review-search"
                              name="hs-as-table-product-review-search"
                              className="py-2 px-3 ps-11 block w-full border-gray-200 bg-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              placeholder="Search"
                            />
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                              <svg
                                className="flex-shrink-0 size-4 text-gray-400"
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
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-2 md:grow">
                          <div className="flex justify-end gap-x-2">
                            <button
                              className="py-2 px-3 inline-flex items-center transition duration-500 gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-teal-500 text-white shadow-sm hover:bg-white disabled:opacity-50 disabled:pointer-events-none hover:text-black"
                              onClick={() => {
                                dispatch(toggleForm());
                                setaddform(true);
                                seteditform(false);
                              }}
                            >
                              <i className="fa-solid fa-plus text-[14px]"></i>
                              Add Product
                            </button>
                            <div
                              className="hs-dropdown [--placement:bottom-right] relative inline-block"
                              data-hs-dropdown-auto-close="inside"
                            >
                              <button
                                id="hs-as-table-table-filter-dropdown"
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                              >
                                <svg
                                  className="flex-shrink-0 size-3.5"
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
                                  <path d="M3 6h18" />
                                  <path d="M7 12h10" />
                                  <path d="M10 18h4" />
                                </svg>
                                Filter
                                <span className="ps-2 text-xs font-semibold text-blue-600 border-s border-gray-200">
                                  1
                                </span>
                              </button>
                              <div
                                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-10 bg-white shadow-md rounded-lg mt-2"
                                aria-labelledby="hs-as-table-table-filter-dropdown"
                              >
                                <div className="divide-y divide-gray-200">
                                  <label
                                    htmlFor="hs-as-filters-dropdown-all"
                                    className="flex py-2.5 px-3"
                                  >
                                    <input
                                      type="checkbox"
                                      className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                      id="hs-as-filters-dropdown-all"
                                      checked
                                    />
                                    <span className="ms-3 text-sm text-gray-800">
                                      All
                                    </span>
                                  </label>
                                  <label
                                    htmlFor="hs-as-filters-dropdown-published"
                                    className="flex py-2.5 px-3"
                                  >
                                    <input
                                      type="checkbox"
                                      className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                      id="hs-as-filters-dropdown-published"
                                    />
                                    <span className="ms-3 text-sm text-gray-800">
                                      Published
                                    </span>
                                  </label>
                                  <label
                                    htmlFor="hs-as-filters-dropdown-pending"
                                    className="flex py-2.5 px-3"
                                  >
                                    <input
                                      type="checkbox"
                                      className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                      id="hs-as-filters-dropdown-pending"
                                    />
                                    <span className="ms-3 text-sm text-gray-800">
                                      Pending
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Table */}
                      <table className="min-w-full divide-y bg-teal-200 divide-gray-200">
                        {/* Thead */}
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Preview
                              </span>
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Name
                              </span>
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Category
                              </span>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                InStock
                              </span>
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Price
                              </span>
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Quantity
                              </span>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Colors
                              </span>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Size
                              </span>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                ProductId
                              </span>
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Action
                              </span>
                            </th>
                          </tr>
                        </thead>
                        {/* Tbody */}
                        <tbody className="divide-y divide-gray-200">
                          {currentproducts.map((item, index) => {
                            return (
                              <>
                                {productId == item.id &&
                                isLoadingEditProduct ? (
                                  <>
                                    <tr>
                                      <td colSpan="10">
                                        <div
                                          className="flex items-center justify-center p-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                                          role="alert"
                                        >
                                          <span className="loading loading-dots loading-lg mr-[10px]"></span>
                                          <div>
                                            <span className="font-medium">
                                              Success Update!
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </>
                                ) : (
                                  <>
                                    <tr className="bg-white hover:bg-gray-50 text-center">
                                      {/* ProductImage */}
                                      <td className="  whitespace-nowrap flex justify-center p-2   ">
                                        {/* avatar */}
                                        <div className="avatar">
                                          <div className="w-24 rounded-full o">
                                            <img
                                              className="cursor-pointer hover:scale-75 transition duration-700	"
                                              src={item.imageURL[0]}
                                            />
                                          </div>
                                        </div>
                                      </td>
                                      {/* ProductName */}
                                      <td className=" whitespace-nowrap align-center text-center">
                                        {item.name}
                                      </td>
                                      {/* ProductCategory */}
                                      <td className=" whitespace-nowrap align-center text-center">
                                        {item.category}
                                      </td>
                                      {/* isInStock */}
                                      <td className=" whitespace-nowrap align-center text-center">
                                        {item.inStock && (
                                          <>
                                            <span className="bg-green-100 cursor-pointer text-green-800  text-xs font-medium  px-6 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
                                              in Stock
                                            </span>
                                          </>
                                        )}
                                        {!item.inStock && (
                                          <>
                                            <span className="bg-red-100 cursor-pointer text-red-800  text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
                                              out of Stock
                                            </span>
                                          </>
                                        )}
                                      </td>
                                      {/* ProductPrice */}
                                      <td className=" whitespace-nowrap align-center text-center">
                                        {item.newPrice}{" "}
                                        <i className="fa-solid fa-dollar-sign" />
                                      </td>
                                      {/* ProductQuantity */}
                                      <td className=" whitespace-nowrap align-center text-center">
                                        <span className="pr-2">
                                          {item.productQuantity}
                                        </span>
                                        <i className="fa-solid fa-boxes-stacked " />
                                      </td>
                                      {/* ProductColors */}
                                      <td className=" whitespace-nowrap align-center text-center">
                                        {item.color.map((item) => {
                                          return (
                                            <>
                                              <span className="mr-2">
                                                <i
                                                  className="fa-solid fa-circle"
                                                  style={{ color: item }}
                                                ></i>
                                              </span>
                                            </>
                                          );
                                        })}
                                      </td>
                                      {/* ProductSize */}
                                      <td className=" whitespace-nowrap align-center text-center">
                                        {item.size &&
                                          item.size.map((s) => {
                                            return (
                                              <>
                                                <span className="pr-2">
                                                  {s.value}
                                                </span>
                                              </>
                                            );
                                          })}
                                      </td>
                                      {/* ProductId */}
                                      <td className=" whitespace-nowrap align-center text-center">
                                        {item.id}
                                      </td>
                                      {/* Delete */}
                                      <td className=" whitespace-nowrap align-center text-center">
                                        <Deletebutton id={item.id} />
                                        {/* edit */}
                                        <button
                                          onClick={() => {
                                            dispatch(toggleForm());
                                            setproductId(item.id);
                                            seteditform(true);
                                            setaddform(false);
                                            setProductdata(item);
                                          }}
                                        >
                                          <i
                                            className="fa-solid fa-pen-to-square mr-[15px] "
                                            style={{ color: "#00215E" }}
                                          ></i>
                                        </button>
                                        <button>
                                          <Link
                                            to={`/productdetail/${item.id}`}
                                          >
                                            <i className="fa-solid fa-eye text-gray-500 hover:text-neutral-800"></i>
                                          </Link>
                                        </button>
                                      </td>
                                      {/* Edit */}
                                    </tr>
                                  </>
                                )}
                              </>
                            );
                          })}
                          {/* FORM */}
                          {showForm && (
                            <div className=" z-20 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50  ">
                              <div className="bg-slate-200 p-8 rounded shadow-lg overflow-auto">
                                <div className="w-400 overflow-auto h-[500px] bg-slate-200">
                                  <form
                                    className="max-w-lg mx-auto mr-[40px]"
                                    onSubmit={handleSubmit(OnSubmit)}
                                  >
                                    <div className="flex justify-end">
                                      <button
                                        onClick={() => {
                                          reset();
                                          setProductdata(null);
                                          dispatch(toggleForm());
                                        }}
                                        className="  text-gray-600 hover:text-gray-800 text-teal-600 rounded-full text-xl"
                                      >
                                        <IoCloseCircleOutline />
                                      </button>
                                    </div>
                                    {/* name */}
                                    <div className="relative z-0 w-full mb-5 group">
                                      <input
                                        type="text"
                                        name="name"
                                        defaultValue={
                                          editform ? productdata.name : ""
                                        }
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        {...register("name")}
                                      />

                                      <label
                                        htmlFor="name"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                      >
                                        Product Name
                                      </label>
                                      {errors.name && (
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                                          {errors.name.message}
                                        </span>
                                      )}
                                    </div>
                                    {/*LifeStyles */}
                                    <div className="relative  w-full mb-5 z-1000 group ">
                                      <select
                                        name="category"
                                        id=""
                                        className="w-full h-[36px]  glass"
                                        defaultValue={
                                          editform ? productdata.category : ""
                                        }
                                        required
                                        {...register("category")}
                                      >
                                        <option
                                          value=""
                                          disabled
                                          selected
                                          hidden
                                        >
                                          Select Categorie
                                        </option>{" "}
                                        <option value="Clothing">
                                          Clothing
                                        </option>
                                        <option value="Accessories">
                                          Accessories
                                        </option>
                                        <option value="Shoes">Shoes</option>
                                        <option value="Bag">Bag</option>
                                        <option value="T-Shirt ">
                                          T-Shirt{" "}
                                        </option>
                                      </select>
                                    </div>
                                    <div className="relative  w-full mb-5 z-1000 group ">
                                      <select
                                        name="LifeStyleName"
                                        id=""
                                        className="w-full h-[36px]  glass"
                                        defaultValue={
                                          editform
                                            ? productdata.LifeStyleName
                                            : ""
                                        }
                                        required
                                        {...register("LifeStyleName")}
                                      >
                                        <option
                                          value=""
                                          disabled
                                          selected
                                          hidden
                                        >
                                          Select LifeStyle
                                        </option>
                                        {lifestyles?.LifeStyle.map((item) => {
                                          return (
                                            <>
                                              <option
                                                value={item.LifeStyleName}
                                              >
                                                {item.LifeStyleName}
                                              </option>
                                            </>
                                          );
                                        })}
                                      </select>
                                    </div>
                                    {/* productQuantity */}
                                    <div className="relative z-0 w-full mb-5 group">
                                      <input
                                        type="number"
                                        min="0"
                                        name="productQuantity"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        {...register("productQuantity")}
                                        defaultValue={
                                          editform
                                            ? productdata.productQuantity
                                            : ""
                                        }
                                        required
                                      />
                                      <label
                                        htmlFor="productQuantity"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                      >
                                        Product Quantity
                                      </label>

                                      {errors.productQuantity && (
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                                          {errors.productQuantity.message}{" "}
                                        </span>
                                      )}
                                    </div>
                                    {/* newPrice */}
                                    <div className="relative z-0 w-full mb-5 group">
                                      <input
                                        type="number"
                                        min="0"
                                        name="newPrice"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        {...register("newPrice")}
                                        defaultValue={
                                          editform ? productdata.newPrice : ""
                                        }
                                        required
                                      />
                                      <label
                                        htmlFor="newPrice"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                      >
                                        Product Price
                                      </label>

                                      {errors.price && (
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                                          {errors.newPrice.message}{" "}
                                        </span>
                                      )}
                                    </div>

                                    {/* oldPrice */}
                                    <div className="relative z-0 w-full mb-5 group">
                                      <input
                                        type="number"
                                        min="0"
                                        name="oldPrice"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        {...register("oldPrice")}
                                        defaultValue={
                                          editform ? productdata.oldPrice : ""
                                        }
                                        required
                                      />
                                      <label
                                        htmlFor="newPrice"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                      >
                                        Old Price
                                      </label>

                                      {errors.price && (
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                                          {errors.oldPrice.message}{" "}
                                        </span>
                                      )}
                                    </div>

                                    {/* Stars */}
                                    <div className="relative z-0 w-full mb-5 group">
                                      <input
                                        type="number"
                                        min="0"
                                        max="5"
                                        name="stars"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        {...register("stars")}
                                        defaultValue={
                                          editform ? productdata.stars : ""
                                        }
                                        required
                                      />
                                      <label
                                        htmlFor="stars"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                      >
                                        Stars
                                      </label>

                                      {errors.price && (
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                                          {errors.stars.message}{" "}
                                        </span>
                                      )}
                                    </div>
                                    {/* Product_InStock */}
                                    <div className="relative z-0 w-full mb-5 group">
                                      <select
                                        name="Product_isAvailable"
                                        id="Product_isAvailable"
                                        className="w-full h-[36px]  glass"
                                        placeholder=" "
                                        required
                                        {...register("inStock")}
                                      >
                                        <option
                                          value=""
                                          disabled
                                          selected
                                          hidden
                                        >
                                          Select availability
                                        </option>
                                        {addform && (
                                          <>
                                            <option
                                              className="bg-green-500  text-white"
                                              value={true}
                                            >
                                              inStock
                                            </option>
                                            <option
                                              className="bg-red-500 text-white"
                                              value={false}
                                            >
                                              OutStock
                                            </option>
                                          </>
                                        )}
                                        {editform && productdata.inStock && (
                                          <>
                                            <option
                                              className="bg-green-500  text-white"
                                              value={true}
                                              selected
                                            >
                                              inStock
                                            </option>
                                            <option
                                              className="bg-red-500  text-white"
                                              value={false}
                                            >
                                              OutStock
                                            </option>
                                          </>
                                        )}
                                        {editform && !productdata.inStock && (
                                          <>
                                            <option
                                              className="bg-green-500  text-white"
                                              value={true}
                                            >
                                              inStock
                                            </option>
                                            <option
                                              className="bg-red-500  text-white"
                                              value={false}
                                              selected
                                            >
                                              OutStock
                                            </option>
                                          </>
                                        )}
                                      </select>
                                    </div>
                                    {/* Product_Size */}
                                    <div className="relative z-1000 w-full mb-5 group">
                                      <Select
                                        options={options}
                                        defaultValue={
                                          productdata != null
                                            ? productdata.size
                                            : ""
                                        }
                                        isMulti={true}
                                        onChange={handlechange}
                                        // styles={{
                                        //   // Style for the dropdown container
                                        //   container: (provided, state) => ({
                                        //     ...provided,
                                        //     backgroundColor: "white", // Change background color
                                        //   }),
                                        //   // Style for the dropdown menu
                                        //   menu: (provided, state) => ({
                                        //     ...provided,
                                        //     backgroundColor: "lightblue",
                                        //     fontFamily: "cursive", // Change background color
                                        //   }),
                                        //   // Style for the options in the dropdown
                                        //   option: (provided, state) => ({
                                        //     ...provided,
                                        //     color: "black",
                                        //     backgroundColor: "white", // Change background color
                                        //   }),
                                        // }}
                                      ></Select>
                                    </div>
                                    {/* Product_Color */}
                                    <div className="relative z-0 w-full mb-5 group flex justify-center items-center gap-4 ">
                                      Colors
                                      <input
                                        type="color"
                                        defaultValue={
                                          editform ? productdata.color[0] : ""
                                        }
                                        {...register("color[0]")}
                                      />
                                      <input
                                        type="color"
                                        defaultValue={
                                          editform ? productdata.color[1] : ""
                                        }
                                        {...register("color[1]")}
                                      />
                                      <input
                                        type="color"
                                        defaultValue={
                                          editform ? productdata.color[2] : null
                                        }
                                        {...register("color[2]")}
                                      />
                                    </div>
                                    {/* Product_Image */}
                                    <div className="relative z-0 w-full mb-5 group">
                                      <label
                                        htmlFor="imageUrl"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                      >
                                        Upload File
                                      </label>
                                      <input
                                        name="imageURL"
                                        type="file"
                                        multiple
                                        onChange={handlephoto}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      />
                                    </div>
                                    {/* Button_Submit */}
                                    <div className="flex justify-center">
                                      <button
                                        type="submit"
                                        className="mt-6 mb-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </form>
                                  {error && <div> {error.message} </div>}
                                </div>{" "}
                              </div>
                            </div>
                          )}
                        </tbody>
                      </table>

                      {/* Pagination */}
                      <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
                        <div className="max-w-sm space-y-3"></div>
                        <div>
                          {/* Pagination */}
                          <nav className="flex items-center gap-x-1">
                            <button
                              type="button"
                              className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                              disabled={currentPage === 1 ? true : false}
                              onClick={() => {
                                setCurrentPage(currentPage - 1);
                              }}
                            >
                              <svg
                                className="flex-shrink-0 size-3.5"
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
                                <path d="m15 18-6-6 6-6" />
                              </svg>
                              <span>Previous</span>
                            </button>
                            <div className="flex items-center gap-x-1">
                              {pageNumber.map((item) => {
                                return (
                                  <>
                                    <button
                                      type="button"
                                      className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                      aria-current="page"
                                      onClick={() => setCurrentPage(item)}
                                    >
                                      {item}
                                    </button>
                                  </>
                                );
                              })}
                            </div>
                            <button
                              type="button"
                              className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                              disabled={
                                currentPage === pageNumber.length ? true : false
                              }
                              onClick={() => {
                                setCurrentPage(currentPage + 1);
                              }}
                            >
                              <span>Next</span>
                              <svg
                                className="flex-shrink-0 size-3.5"
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
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </button>
                          </nav>
                          {/* End Pagination */}

                          {/* End Pagination */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Products;