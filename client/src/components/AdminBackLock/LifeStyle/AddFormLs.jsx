/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import "react-datepicker/dist/react-datepicker.css";
import {
  useAddLifeStyleMutation,
  useUpdateLifeStyleMutation,
} from "../../../redux/services/LifeStyleData";
import { useNavigate } from "react-router-dom";
import { setShowForm } from "../../../redux/formState/form";
import { setShowEditForm } from "../../../redux/formState/form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = zod.object({
  LifeStyle_name: zod.string().min(4),
  LifeStyle_Type: zod.string().min(4),
  LifeStyle_Story: zod.string().min(4),
  LifeStyle_Description: zod.string().min(4),
  LifeStyle_Trending: zod
    .string()
    .transform((value) => (value === "true" ? true : false)),
});
function AddFormLs({
  refetchLifestyles,
  editingLifestyle,
  setEditingLifestyle,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handlePhoto = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [addLifeStyle, { data, error, isLoading }] = useAddLifeStyleMutation();
  const [updateLifeStyle] = useUpdateLifeStyleMutation();

  useEffect(() => {
    reset({
      LifeStyle_name: editingLifestyle ? editingLifestyle.LifeStyleName : "",
      LifeStyle_Type: editingLifestyle ? editingLifestyle.styleType : "",
      LifeStyle_Story: editingLifestyle ? editingLifestyle.Content.story : "",
      LifeStyle_Description: editingLifestyle
        ? editingLifestyle.Content.description
        : "",
      LifeStyle_Trending: editingLifestyle ? editingLifestyle.trending : "",
    });
  }, [editingLifestyle, reset]);
  // Step 3: Modify your form to handle both creating and editing
  const onSubmit = async (formData) => {
    const uploadImage = async () => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "lpkk0jkj");
      data.append("cloud_name", "duvf9j212");
      data.append("folder", "Cloudinary-React");

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/duvf9j212/image/upload`,
          {
            method: "POST",
            body: data,
          }
        );
        const responseData = await response.json(); // Parse response JSON
        console.log("Cloudinary API Response:", responseData); // Log entire response
        if (responseData && responseData.secure_url) {
          // Check if secure_url is available in the response
          console.log(responseData.secure_url);
          return responseData.secure_url;
        } else {
          console.error(
            "Image upload failed: Secure URL not found in response"
          );
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
    const newData = {
      LifeStyleName: formData.LifeStyle_name,
      styleType: formData.LifeStyle_Type,
      ImageURL: await uploadImage(),
      Content: {
        story: formData.LifeStyle_Story,
        description: formData.LifeStyle_Description,
      },
      trending: formData.LifeStyle_Trending,
    };
    if (editingLifestyle) {
      // Step 4: If editingLifestyle isn't null, update the lifestyle
      try {
        const response = await updateLifeStyle({
          id: editingLifestyle.LifeStyleID,
          lifeStyle: newData,
        });
        console.log(response.data);
        refetchLifestyles();
        setEditingLifestyle(null); // Reset the editingLifestyle state variable
        dispatch(setShowEditForm());
      } catch (err) {
        console.log(err);
      }
    } else {
      // If editingLifestyle is null, create a new lifestyle
      try {
        console.log("Adding new");
        console.log(newData);
        uploadImage();
        const response = await addLifeStyle(newData);
        console.log(response.data);
        refetchLifestyles();
        dispatch(setShowForm());
        toast.success("New lifestyle added successfully!", {
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
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-400 bg-slate-200">
      {isLoading && <div> loading... </div>}
      <form className="max-w-lg mx-auto " onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="LifeStyle_name"
            id="LifeStyle_name"
            defaultValue={
              editingLifestyle ? editingLifestyle.LifeStyleName : ""
            }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            {...register("LifeStyle_name")}
            required
          />
          <label
            htmlFor="LifeStyle_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Life Style Name
          </label>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            {errors.LifeStyle_name?.message}
          </span>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="LifeStyle_Type"
            id="LifeStyle_Type"
            defaultValue={
              editingLifestyle ? editingLifestyle.LifeStyle_Type : ""
            }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            {...register("LifeStyle_Type")}
          />
          <label
            htmlFor="LifeStyle_Type"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Life Style Type
          </label>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            {errors.LifeStyle_Type?.message}
          </span>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="textarea"
            name="LifeStyle_Story"
            id="LifeStyle_Story"
            defaultValue={
              editingLifestyle ? editingLifestyle.LifeStyle_Story : ""
            }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("LifeStyle_Story")}
          />
          <label
            htmlFor="LifeStyle_Story"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Life Style Story
          </label>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            {errors.LifeStyle_Story?.message}
          </span>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="textarea"
            name="LifeStyle_Description"
            id="LifeStyle_Description"
            defaultValue={
              editingLifestyle ? editingLifestyle.LifeStyle_Description : ""
            }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            {...register("LifeStyle_Description")}
          />
          <label
            htmlFor="LifeStyle_Description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Life Style Description
          </label>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            {errors.LifeStyle_Description?.message}
          </span>
        </div>
        {/* Life_Style_Trending */}
        <div className="relative z-0 w-full mb-5 group">
          <select
            name="LifeStyle_Trending"
            id="LifeStyle_Trending"
            defaultValue={
              editingLifestyle ? editingLifestyle.LifeStyle_Trending : true
            }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            {...register("LifeStyle_Trending")}
          >
            <option value={true}>Trending</option>
            <option value={false}>Not Trending</option>
          </select>
        </div>

        <label
          className="my-6 peer-focus:font-medium block mb-2 text-sm text-gray-500 dark:text-white"
          htmlFor="image"
        >
          Upload file
        </label>
        <input
          className="mt-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="image"
          id="image"
          type="file"
          onChange={(e) => handlePhoto(e)}
        />
        <button
          type="submit"
          className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      {error && <div> {error.message} </div>}
    </div>
  );
}
export default AddFormLs;
