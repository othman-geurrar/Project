/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { NavBaar } from "../../components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCameraRotate } from "react-icons/fa6";
import { useGetOneUserQuery } from "../../redux/Users/userSliceFront";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ProfilUser = () => {
  // accordion
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  // commandes
  const [commandes, setCommandes] = useState(1);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // image
  const fileInputRef = useRef(null);
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const userid = localStorage.getItem("userId");
  const { data: user } = useGetOneUserQuery(userid);
  const createdAtDate = new Date(user?.createdAt);
  const formattedDate = `${createdAtDate?.getDate()} ${createdAtDate?.toLocaleString(
    "default",
    { month: "short" }
  )} ${createdAtDate?.getFullYear()} ${createdAtDate?.getHours()}h:${createdAtDate?.getMinutes()}min`;

  return (
    <>
      <main className="min-h-screen flex flex-col">
        {/* NavBar */}
        <NavBaar />
        {/* Infos */}
        <div className="flex-grow flex p-[30px] gap-[20px] pt-[30px] m-[50px]">
          <div
            className={`flex flex-col gap-[10px] w-[30%] py-[20px] rounded-[20px] border-r-4 ${
              commandes == 1 || commandes == 1.2 || commandes == 1.5
                ? "border-teal-500"
                : commandes == 2 || commandes == 2.2 || commandes == 2.5
                ? "border-blue-500"
                : "border-red-500"
            }`}
            style={{ boxShadow: "#24314233 0px 4px 16px 0px" }}
          >
            {/* image */}
            <div className="avatar flex flex-col items-center">
              <div className="w-30 rounded-full relative group">
                <img
                  src={user?.profilePictureURL}
                  alt="Avatar"
                  className="rounded-full"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-full cursor-pointer"
                  onClick={triggerFileInput}
                >
                  <FaCameraRotate className="text-white text-2xl" />
                </div>
                <input type="file" ref={fileInputRef} className="hidden" />
              </div>
            </div>
            {/* name */}
            <div className="text-center  text-[30px] mb-[30px] font-profilName text-gray-500">
              {user?.UserName}
            </div>
            <div className="">
              <Accordion open={open === 1} className=" ">
                <AccordionHeader
                  onClick={() => {
                    handleOpen(1);
                    setCommandes(1);
                  }}
                  className={`cursor-pointer transition duration-200 ${
                    commandes == 1 || commandes == 1.2 || commandes == 1.5
                      ? "bg-teal-500 text-white"
                      : " hover:bg-teal-500 hover:text-white"
                  }   p-3 `}
                >
                  <i className="fa-solid fa-house mr-2"></i> Informations
                </AccordionHeader>
                <AccordionBody
                  onClick={() => {
                    setCommandes(1.2);
                  }}
                  className={`cursor-pointer transition duration-200 ${
                    commandes == 1.2
                      ? "bg-teal-200 text-black"
                      : " hover:bg-teal-200 hover:text-black"
                  }   p-3 `}
                >
                  Account Infos
                </AccordionBody>
                <AccordionBody
                  onClick={() => {
                    setCommandes(1.5);
                  }}
                  className={`cursor-pointer transition duration-200 ${
                    commandes == 1.5
                      ? "bg-teal-200 text-black"
                      : " hover:bg-teal-200 hover:text-black"
                  }   p-3 `}
                >
                  Personnel Information
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => {
                    handleOpen(2);
                    setCommandes(2);
                  }}
                  className={`cursor-pointer transition duration-200 ${
                    commandes == 2 || commandes == 2.2 || commandes == 2.5
                      ? "bg-blue-500 text-white"
                      : " hover:bg-blue-500 hover:text-white"
                  }   p-3 `}
                >
                  {" "}
                  <i className="fa-solid fa-person-circle-minus mr-2"></i>
                  Edit Inforamtions
                </AccordionHeader>
                <AccordionBody
                  onClick={() => {
                    setCommandes(2.2);
                  }}
                  className={`cursor-pointer transition duration-200 ${
                    commandes == 2.2
                      ? "bg-blue-300 text-black"
                      : " hover:bg-blue-300 hover:text-black"
                  }   p-3 `}
                >
                  Edit Infos
                </AccordionBody>
                <AccordionBody
                  onClick={() => {
                    setCommandes(2.5);
                  }}
                  className={`cursor-pointer transition duration-200 ${
                    commandes == 2.5
                      ? "bg-blue-300 text-black"
                      : " hover:bg-blue-300 hover:text-black"
                  }   p-3 `}
                >
                  Edit Password
                </AccordionBody>
              </Accordion>
              <div
                onClick={() => setCommandes(3)}
                className={`cursor-pointer transition duration-200 ${
                  commandes == 3
                    ? "bg-red-500 text-white"
                    : " hover:bg-red-500 hover:text-white"
                }   p-3`}
              >
                <i className="fa-solid fa-person-circle-minus mr-2"></i>
                Delete account
              </div>
            </div>
          </div>
          <div
            className="w-[70%] p-[20px] rounded-[20px]"
            style={{ boxShadow: "#24314233 0px 4px 16px 0px" }}
          >
            <div className="mb-[20px] font-bold text-[30px]">
              Account Settings
            </div>
            {commandes == 1 && (
              <>
                <div className="bg-white overflow-hidden shadow rounded-lg border">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      User Profile
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      This is some information about your account.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          UserName
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user?.UserName}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="underline text-blue-500">
                            {user?.email}
                          </span>
                        </dd>
                      </div>
                      {/* <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 items-center sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Password
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {isPasswordVisible ? `${user.password}` : "********"}
                          <button
                            className="pl-3"
                            onClick={togglePasswordVisibility}
                          >
                            {isPasswordVisible ? (
                              <FaEyeSlash className="text-gray-300" />
                            ) : (
                              <FaEye className="text-gray-300" />
                            )}
                          </button>
                        </dd>
                      </div> */}
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Phone number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user?.phoneNumber ? user.phoneNumber : "----"}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Created At
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {formattedDate}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </>
            )}
            {commandes == 3 && (
              <div className="bg-red-50 border border-red-400 rounded text-red-800 text-sm p-4 flex items-start">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                </div>{" "}
                <div className="w-full">
                  {" "}
                  <p>
                    {" "}
                    <span className="font-bold">Danger:</span> Deleting your
                    account will permanently remove all your information,
                    including orders, personal data, and preferences.
                  </p>
                  <button className="border-red-400 bg-white hover:bg-gray-50 px-4 py-2 mt-4 border rounded font-bold">
                    Yes, Delete My Account
                  </button>
                </div>
              </div>
            )}
            {commandes == 2 && (
              <htmlForm className="w-full max-w-lg ">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-first-name"
                      type="text"
                      placeholder="your first name"
                      value={user ? user.FirstName : ""}
                    />
                    {/* Error */}
                    {/* <p className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p> */}
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="your last name"
                      value={user ? user.LastName : ""}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-xs  font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone Numer
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 mb-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="Number"
                      required
                      placeholder="your Number"
                      value={user ? user.PhoneNumber : ""}
                    />
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-xs  font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 mb-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="email"
                      required
                      value="Aminogha@gmail.com"
                    />
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      value="aminogha@gmail.com"
                    />
                    {/* <p className="text-gray-600 text-xs italic">
                      Make it as long and as crazy as youd like
                    </p> */}
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Save
                  </button>
                </div>
              </htmlForm>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilUser;
