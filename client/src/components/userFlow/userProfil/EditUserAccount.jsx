/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { z } from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEditAccountMutation } from "../../../redux/Users/userSliceFront";
import { useState } from "react";
import axios from "axios";
const EditUserAccount = ({ user }) => {
  // ZOD
  const schema = z.object({
    UserName: z.string().min(4),
    email: z.string().min(4),
  });
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  //   edituser
  const [updateEmailUsername, { isLoading, data }] = useEditAccountMutation();
  const handleEditAccount = async (formData) => {
    formData.profilePictureURL = await uploadImage();
    updateEmailUsername({ id: user.id, formData });
  };
  const [image, setImage] = useState(null);
  const handlephoto = (e) => {
    setImage(e.target.files[0]);
  };
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "lpkk0jkj");
    formData.append("folder", "Cloudinary-React");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/duvf9j212/image/upload",
      formData
    );
    return response.data.url;
  };
  return (
    <section className=" dark:bg-gray-900 mt-[80px]">
      <div className=" flex items-center justify-center px-6 mx-auto lg:py-0">
        <div
          className="w-full p-6 bg-white rounded-lg  dark:border  sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
        >
          {isLoading ? (
            <>Loading...</>
          ) : (
            <form
              className=" space-y-4  md:space-y-5"
              onSubmit={handleSubmit(handleEditAccount)}
            >
              <div className="relative">
                <input
                  type="file"
                  id="email-address-icon"
                  onChange={handlephoto}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  defaultValue={user?.UserName}
                  {...register("UserName")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-5">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    defaultValue={user?.email}
                    {...register("email")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Save Changes
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditUserAccount;