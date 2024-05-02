/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getorders, deleteorder } from "../redux/Orders/orderSlice";
import Header from "../components/Header";

function Orders() {
  const { error, isLoadingorders, orders } = useSelector(
    (state) => state.Orders
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(3);
  const indexOfLastorder = currentPage * ordersPerPage;
  const indexOfFirstorder = indexOfLastorder - ordersPerPage;
  const pageNumber = [];
  const currentorders = orders.slice(indexOfFirstorder, indexOfLastorder);
  for (let i = 1; i <= Math.ceil(orders.length / ordersPerPage); i++) {
    pageNumber.push(i);
  }
  const dispatch = useDispatch();

  function TableOrderStatus({ status }) {
    let bg;
    let iconstatus;
    if (status == "completed") {
      bg = "#23BC06";
      iconstatus = <i className="fa-regular fa-circle-check ml-1" />;
    }
    if (status == "pending") {
      bg = "#9CAFAA";
      iconstatus = <i className="fa-regular fa-hourglass-half ml-1" />;
    }
    if (status == "canceled") {
      bg = "#A0153E";
      iconstatus = <i className="fa-solid fa-xmark ml-1" />;
    }
    return (
      <>
        <button
          type="button"
          style={{ background: bg }}
          className="text-white w-50 py-1 px-2 capitalize rounded-2xl text-center  "
        >
          {status}
          {iconstatus}
        </button>
      </>
    );
  }
  function Deletebutton({ id }) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-outline btn-success",
        cancelButton: "btn btn-outline btn-error",
      },
      buttonsStyling: false,
    });
    return (
      <>
        <button
          type="button"
          className="text-white w-20 py-1 px-2 bg-red-700 capitalize rounded-2xl text-md "
          onClick={() => {
            swalWithBootstrapButtons
              .fire({
                title: "Are u Sure ?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it !",
                cancelButtonText: "No, cancel !",
                reverseButtons: true,
              })
              .then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  dispatch(deleteorder(id));
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error",
                  });
                }
              });
          }}
        >
          <span className="mr-1">Delete</span>
          <i className="fa-solid fa-trash" />
        </button>
      </>
    );
  }

  useEffect(() => {
    dispatch(getorders());
  }, [dispatch]);

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 rounded-3xl  ">
        <Header category="Page" title="Orders" />
        {isLoadingorders ? (
          <>
            <div className="flex items-center justify-center">
              <span className="mr-[20px]">Orders Uploading</span>
              <span className="loading loading-spinner text-accent"></span>
            </div>
          </>
        ) : error ? (
          <>
            <div role="alert" className="alert alert-error">
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
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
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
                          <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                            <button
                              id="hs-as-table-table-export-dropdown"
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
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" x2="12" y1="15" y2="3" />
                              </svg>
                              Export
                            </button>
                            <div
                              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-10 bg-white shadow-md rounded-lg p-2 mt-2"
                              aria-labelledby="hs-as-table-table-export-dropdown"
                            >
                              <div className="py-2 first:pt-0 last:pb-0">
                                <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400">
                                  Options
                                </span>
                                <a
                                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                                  href="#"
                                >
                                  <svg
                                    className="flex-shrink-0 size-4"
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
                                    <rect
                                      width="8"
                                      height="4"
                                      x="8"
                                      y="2"
                                      rx="1"
                                      ry="1"
                                    />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                  </svg>
                                  Copy
                                </a>
                                <a
                                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                                  href="#"
                                >
                                  <svg
                                    className="flex-shrink-0 size-4"
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
                                    <polyline points="6 9 6 2 18 2 18 9" />
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                    <rect width="12" height="8" x="6" y="14" />
                                  </svg>
                                  Print
                                </a>
                              </div>
                              <div className="py-2 first:pt-0 last:pb-0">
                                <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400">
                                  Download options
                                </span>
                                <a
                                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                                  href="#"
                                >
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                  </svg>
                                  Excel
                                </a>
                                <a
                                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                                  href="#"
                                >
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.517 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495Zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879l-1.327 4Z"
                                    />
                                  </svg>
                                  .CSV
                                </a>
                                <a
                                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                                  href="#"
                                >
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                    <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
                                  </svg>
                                  .PDF
                                </a>
                              </div>
                            </div>
                          </div>

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
                    <table className="min-w-full divide-y divide-gray-200">
                      {/* Thead */}
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Image Customer
                            </span>
                          </th>

                          <th scope="col" className="px-6 py-3 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Customer Name
                            </span>
                          </th>

                          <th scope="col" className="px-6 py-3 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Order Date
                            </span>
                          </th>

                          <th scope="col" className="px-6 py-3 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Products
                            </span>
                          </th>

                          <th scope="col" className="px-6 py-3 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Status
                            </span>
                      
                          </th>

                          <th scope="col" className="px-6 py-3 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              OrderId
                            </span>
                          </th>

                          <th scope="col" className="px-6 py-3 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Delete
                            </span>
                          </th>
                        </tr>
                      </thead>
                      {/* Tbody */}
                      <tbody className="divide-y divide-gray-200">
                        {currentorders.map((item, index) => {
                          return (
                            <>
                              <tr className="bg-white hover:bg-gray-50 text-center">
                                <td className="size-px whitespace-nowrap align-center text-center ">
                                  {/* avatar */}
                                  <div className="avatar">
                                    <div className="w-24 rounded-full">
                                      <img src={item.user.userPic} />
                                    </div>
                                  </div>
                                </td>
                                {/* OrderName */}
                                <td className="size-px whitespace-nowrap align-center text-center">
                                  {item.user.UserName}
                                </td>
                                {/* OrderDate */}
                                <td className="size-px whitespace-nowrap align-center text-center">
                                  {/* {item.createdAt} */}
                                  10 Apr 2024
                                </td>
                                {/* OrderProducts */}
                                <td className="size-px whitespace-nowrap align-center text-center">
                                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                                  <button
                                    className="btn btn-outline btn-accent"
                                    onClick={() =>
                                      document
                                        .getElementById("my_modal_5")
                                        .showModal()
                                    }
                                  >
                                    {item.products.length} Products
                                  </button>
                                  <dialog
                                    id="my_modal_5"
                                    className="modal modal-bottom sm:modal-middle "
                                  >
                                    <div className="overflow-x-auto bg-black rounded-[15px]">
                                      <table className="table">
                                        {/* head */}
                                        <thead>
                                          <tr>
                                            <th className="text-center">
                                              Image
                                            </th>
                                            <th className="text-center">
                                              Name
                                            </th>
                                            <th className="text-center">
                                              Price
                                            </th>
                                            <th className="text-center">
                                              Quantity
                                            </th>
                                            <th className="text-center"></th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {/* row 1 */}
                                          {item.products.map(
                                            (product, index) => {
                                              return (
                                                <>
                                                  <tr>
                                                    <td className="flex items-center justify-center">
                                                      <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                          <img
                                                            src={
                                                              product.imageURL
                                                            }
                                                            alt="Avatar Tailwind CSS Component"
                                                          />
                                                        </div>
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <span className="badge badge-ghost badge-sm">
                                                        {product.name}
                                                      </span>
                                                    </td>
                                                    <td className="text-center">
                                                      {product.price}
                                                    </td>
                                                    <td className="text-center">
                                                      {product.productQuantity}
                                                    </td>
                                                    <th>
                                                      <button className="btn btn-ghost btn-xs">
                                                        details
                                                      </button>
                                                    </th>
                                                  </tr>
                                                </>
                                              );
                                            }
                                          )}
                                        </tbody>
                                        {/* foot */}
                                        <tfoot>
                                          <tr>
                                            <th className="text-center">
                                              Image
                                            </th>
                                            <th className="text-center">
                                              Name
                                            </th>
                                            <th className="text-center">
                                              Price
                                            </th>
                                            <th className="text-center">
                                              Quantity
                                            </th>
                                          </tr>
                                          <tr>
                                            <td className="modal-action flex justify-center">
                                              <form method="dialog">
                                                <button className="btn">
                                                  Close
                                                </button>
                                              </form>
                                            </td>
                                          </tr>
                                        </tfoot>
                                      </table>
                                    </div>
                                  </dialog>
                                </td>
                                {/* OrderStatus */}
                                <td className="size-px whitespace-nowrap align-center text-center">
                                  <TableOrderStatus status={item.orderStatus} />
                                </td>
                                {/* OrderId */}
                                <td className="size-px whitespace-nowrap align-center text-center">
                                  {item.id}
                                </td>
                                {/* Delete */}
                                <td className="size-px whitespace-nowrap align-center text-center">
                                  <Deletebutton id={item.id} />
                                </td>
                              </tr>
                            </>
                          );
                        })}
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
        )}
      </div>
    </>
  );
}
export default Orders;
