/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getusers,
  toggleForm,
  updateuser,
  adduser,
} from "../../redux/Users/usersSlice";
import { Deletebutton } from "../../components/AdminBackLock/users/DeleteUser";
import Header from "../../components/AdminBackLock/Header";
import { Dropdown, Ripple, initTWE } from "tw-elements";
import { IoCloseCircleOutline } from "react-icons/io5";
// Zod
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = zod.object({
  User_Name: zod.string().min(4),
  User_Email: zod.string().min(4),
});
//Users Componnent
function Users() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  initTWE({ Dropdown, Ripple });

  const { error, isLoadingusers, users, showForm } = useSelector(
    (state) => state.Users
  );
  const [userdata, setuserdata] = useState({
    UserName: "",
    email: "",
    password: "",
  });
  const [userId, setuserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setusersPerPage] = useState(3);
  const indexOfLastorder = currentPage * usersPerPage;
  const indexOfFirstorder = indexOfLastorder - usersPerPage;
  const pageNumber = [];
  const currentusers = users.slice(indexOfFirstorder, indexOfLastorder);
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumber.push(i);
  }
  // addform & editform
  const [addform, setaddform] = useState(false);
  const [editform, seteditform] = useState(false);
  const dispatch = useDispatch();

  function OnSubmit(e, id) {
    e.preventDefault();
    dispatch(toggleForm());
    if (editform) dispatch(updateuser({ userdata, id }));
    if (addform) {
      dispatch(adduser(userdata));
      toast.success("New User added successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // You might want to import Bounce from 'react-toastify/dist/react-toastify.css' if it's not already imported
        // transition: Bounce,
      });
    }
    setuserdata({
      UserName: "",
      email: "",
      password: "",
    });
  }
  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);
  const a = (date) => {
    const createdAtDate = new Date(date);
    const htmlFormattedDate = `${createdAtDate?.getDate()} ${createdAtDate?.toLocaleString(
      "default",
      { month: "short" }
    )} ${createdAtDate?.getFullYear()} ${createdAtDate?.getHours()}h:${createdAtDate?.getMinutes()}min`;
    return htmlFormattedDate;
  };

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  ">
        <Header category="Page" title="Users" />
        {isLoadingusers ? (
          <>
            <div className="flex items-center justify-center">
              <span className="mr-[20px]">Users Uploading</span>
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
          <>
            <div className="max-w-[85rem] mx-auto">
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                      <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b bg-customGreen border-gray-200">
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
                              Add User
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
                      <table className="min-w-full divide-y divide-gray-200">
                        {/* Thead */}
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Users
                              </span>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                UserName
                              </span>
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Email
                              </span>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                UserId
                              </span>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                CreatedAt
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
                          {currentusers.map((item, index) => {
                            return (
                              <>
                                <tr className="bg-white hover:bg-gray-50 text-center">
                                  {/* UserImage */}
                                  <td className="  whitespace-nowrap flex justify-center p-2 ">
                                    {/* avatar */}
                                    <div className="avatar">
                                      <div className="w-24 rounded-full ring ring-teal-600  ring-offset-2">
                                        <img src={item.profilePictureURL} />{" "}
                                      </div>
                                    </div>
                                  </td>
                                  {/* UserName */}
                                  <td className=" whitespace-nowrap align-center text-center">
                                    {item.UserName}
                                  </td>
                                  {/* UserEmail */}
                                  <td className=" whitespace-nowrap align-center text-center">
                                    {item.email}
                                  </td>
                                  {/* UserId */}
                                  <td className=" whitespace-nowrap align-center text-center">
                                    {item.id}
                                  </td>
                                  <td className=" whitespace-nowrap align-center text-center">
                                    {a(item.createdAt)}
                                  </td>
                                  {/* Delete */}
                                  <td className=" whitespace-nowrap align-center text-center ">
                                    {/* edit */}
                                    <button
                                      onClick={() => {
                                        dispatch(toggleForm());
                                        setuserId(item.id);
                                        setaddform(false);
                                        seteditform(true);
                                        console.log(item.id);
                                        setuserdata((prevData) => ({
                                          ...prevData,
                                          UserName: item.UserName,
                                          email: item.email,
                                        }));
                                      }}
                                    >
                                      <i
                                        className="fa-solid fa-pen-to-square mr-[20px]"
                                        style={{ color: "#00215E" }}
                                      ></i>{" "}
                                    </button>
                                    <Deletebutton id={item.id} />
                                  </td>
                                  {/* Edit */}
                                </tr>
                              </>
                            );
                          })}
                          {showForm && (
                            <div className=" z-20 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                              <div className="bg-slate-200 p-8 rounded shadow-lg">
                                <div className="w-400 bg-slate-200">
                                  <form
                                    className="max-w-lg mx-auto "
                                    onSubmit={(e) => {
                                      handleSubmit(OnSubmit(e, userId));
                                    }}
                                  >
                                    <div className="flex justify-end">
                                      <button
                                        onClick={() => {
                                          setuserdata({
                                            UserName: "",
                                            email: "",
                                          });
                                          dispatch(toggleForm());
                                        }}
                                        className="  text-gray-600 hover:text-gray-800 text-teal-600 rounded-full text-xl"
                                      >
                                        <IoCloseCircleOutline />
                                      </button>
                                    </div>
                                    {/* User_Name */}
                                    <div className="relative z-0 w-full mb-5 group">
                                      <input
                                        type="text"
                                        name="User_Name"
                                        id="User_Name"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        onChange={(e) =>
                                          setuserdata({
                                            ...userdata,
                                            UserName: e.target.value,
                                          })
                                        }
                                        value={userdata.UserName}
                                        required
                                      />
                                      <label
                                        htmlFor="User_Name"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                      >
                                        UserName
                                      </label>
                                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                                        errorName
                                      </span>
                                    </div>
                                    {/* User_Email */}
                                    <div className="relative z-0 w-full mb-5 group">
                                      <input
                                        type="text"
                                        name="User_Email"
                                        id="User_Email"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        required
                                        onChange={(e) =>
                                          setuserdata({
                                            ...userdata,
                                            email: e.target.value,
                                          })
                                        }
                                        value={userdata.email}
                                      />
                                      <label
                                        htmlFor="User_Email"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                      >
                                        Email
                                      </label>
                                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                                        errorcategory
                                      </span>
                                    </div>
                                    {addform && (
                                      <>
                                        {" "}
                                        {/* User_Password */}
                                        <div className="relative z-0 w-full mb-5 group">
                                          <input
                                            type="password"
                                            name="User_Password"
                                            id="User_Password"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=""
                                            required
                                            onChange={(e) =>
                                              setuserdata({
                                                ...userdata,
                                                password: e.target.value,
                                              })
                                            }
                                            value={userdata.password}
                                          />
                                          <label
                                            htmlFor="User_Email"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                          >
                                            Password
                                          </label>
                                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                                            errorPassword
                                          </span>
                                        </div>
                                      </>
                                    )}
                                    <div className="flex justify-center">
                                      <button
                                        type="submit"
                                        className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
export default Users;
