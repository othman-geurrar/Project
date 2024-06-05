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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DeleteAccount from "../../components/userFlow/userProfil/DeleteAccount";
import EditUserAccount from "../../components/userFlow/userProfil/EditUserAccount";
import EditInfo from "../../components/userFlow/userProfil/EditInfo";

const ProfilUser = () => {
  // accordion
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  // commandes
  const [commandes, setCommandes] = useState(1.2);
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
  // backend queries and mutations
  const { data: user } = useGetOneUserQuery(userid);
  const createdAtDate = new Date(user?.createdAt);
  const htmlFormattedDate = `${createdAtDate?.getDate()} ${createdAtDate?.toLocaleString(
    "default",
    { month: "short" }
  )} ${createdAtDate?.getFullYear()} ${createdAtDate?.getHours()}h:${createdAtDate?.getMinutes()}min`;

  return (
    <>
      <main className="min-h-screen flex flex-col">
        {/* NavBar */}
        <NavBaar />
        {/* Infos */}
        <div className="flex-grow flex p-[30px] gap-[20px] pt-[30px] m-[50px] font-profile ">
          <div
            className={`flex flex-col gap-[10px] w-[30%] py-[20px] rounded-[20px] border-r-4 ${
              commandes == 1 || commandes == 1.2 || commandes == 1.5
                ? "border-teal-500"
                : commandes == 2 ||
                  commandes == 2.2 ||
                  commandes == 2.5 ||
                  commandes == 2.3
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
              </div>
            </div>
            {/* name */}
            <div className="text-center  text-[30px] mb-[30px] font-profilName text-gray-500">
              {user?.UserName}
            </div>
            <div className="">
              <Accordion open={open === 1}>
                <AccordionHeader
                  onClick={() => {
                    handleOpen(1);
                    setCommandes(1.2);
                  }}
                  className={`cursor-pointer transition duration-200 text-[15px] ${
                    commandes == 1.2 || commandes == 1.5
                      ? "bg-teal-500 text-white hover:text-white"
                      : " hover:bg-teal-500 hover:text-white"
                  }   p-3 `}
                >
                  <i className="fa-solid fa-house mr-2"></i> Informations
                </AccordionHeader>
                <AccordionBody
                  onClick={() => {
                    setCommandes(1.2);
                  }}
                  className={`cursor-pointer transition duration-200 font-profile ${
                    commandes == 1.2
                      ? "bg-teal-200 text-black"
                      : " hover:bg-teal-200 "
                  }   p-2 `}
                >
                  Account Infos
                </AccordionBody>
                <AccordionBody
                  onClick={() => {
                    setCommandes(1.5);
                  }}
                  className={`cursor-pointer transition duration-200 font-profile ${
                    commandes == 1.5
                      ? "bg-teal-200 text-black"
                      : " hover:bg-teal-200 "
                  }   p-2 `}
                >
                  Personnel Infos
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => {
                    handleOpen(2);
                    setCommandes(2.2);
                  }}
                  className={`cursor-pointer transition duration-200 text-[15px] ${
                    commandes == 2.2 || commandes == 2.5 || commandes == 2.3
                      ? "bg-blue-500 text-white hover:text-white"
                      : " hover:bg-blue-500 hover:text-white"
                  }   p-3 `}
                >
                  <i className="fas fa-edit"></i> Edit Inforamtions
                </AccordionHeader>
                <AccordionBody
                  onClick={() => {
                    setCommandes(2.2);
                  }}
                  className={`cursor-pointer transition duration-200 ${
                    commandes == 2.2
                      ? "bg-blue-300 text-black"
                      : " hover:bg-blue-300 "
                  }   p-2 `}
                >
                  Edit Account
                </AccordionBody>
                <AccordionBody
                  onClick={() => {
                    setCommandes(2.3);
                  }}
                  className={`cursor-pointer transition duration-200 ${
                    commandes == 2.3
                      ? "bg-blue-300 text-black"
                      : " hover:bg-blue-300 "
                  }   p-2 `}
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
                      : " hover:bg-blue-300 "
                  }   p-2 `}
                >
                  Edit Password
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader
                  onClick={() => {
                    handleOpen(3);
                    setCommandes(3);
                  }}
                  className={`cursor-pointer transition duration-200 text-[15px] ${
                    commandes == 3
                      ? "bg-red-500 text-white hover:text-white"
                      : " hover:bg-red-500 hover:text-white"
                  }   p-3`}
                >
                  <i className="fa-solid fa-person-circle-minus mr-2"></i>
                  Delete account
                </AccordionHeader>
              </Accordion>
            </div>
          </div>
          <div
            className="w-[70%] p-[20px]  rounded-[20px]"
            style={{ boxShadow: "#24314233 0px 4px 16px 0px" }}
          >
            <div className="mb-[20px]  font-[600] text-[30px]">
              Account Settings
            </div>
            {/* UserInfo */}
            {commandes === 1.2 && (
              <>
                <div className="bg-white overflow-hidden shadow rounded-lg border">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      User Profile
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      This is some inhtmlFormation about your account.
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
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Member Since
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {htmlFormattedDate}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </>
            )}
            {/* More Info */}
            {commandes == 1.5 && (
              <>
                <div className="bg-white overflow-hidden shadow rounded-lg border">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      User Profile
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      This is some inhtmlFormation about your account.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          FullName
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user.FullName ? user.FullName : <>---</>}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Phone Number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user.PhoneNumber ? user.PhoneNumber : <>---</>}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Adresse
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user.city || user.Street ? (
                            user.city + " " + user.Street
                          ) : (
                            <>---</>
                          )}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Zip Code
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user.zipcode ? user.zipcode : <>---</>}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </>
            )}
            {/* Delete Account */}
            {commandes == 3 && <DeleteAccount user={user} />}
            {/* Edit UserName & Email */}
            {commandes == 2.2 && <EditUserAccount user={user} />}
            {/* Edit More Infos */}
            {commandes == 2.3 && <EditInfo user={user} />}
            {/* Edit Password */}
            {commandes == 2.5 && (
              <>
                <section className=" dark:bg-gray-900">
                  <div className=" flex items-center justify-center px-6 mx-auto lg:py-0">
                    <div
                      className="w-full p-6 bg-white rounded-lg  dark:border  sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                      }}
                    >
                      <form className=" space-y-4  md:space-y-5" action="#">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Current Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            New Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="confirm-password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Confirm password
                          </label>
                          <input
                            type="confirm-password"
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Save Changes
                        </button>
                      </form>
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilUser;
