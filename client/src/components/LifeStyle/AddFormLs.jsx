import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import "react-datepicker/dist/react-datepicker.css";
import { useAddLifeStyleMutation } from "../../redux/services/LifeStyleData";
import { useNavigate } from "react-router-dom";
import { setShowForm } from "../../redux/formState/form"
import { useDispatch } from "react-redux";

const schema = zod.object({
  LifeStyle_name: zod.string().min(4),
  LifeStyle_Type: zod.string().min(4),
  LifeStyle_Story: zod.string().min(4),
  LifeStyle_imgurl: zod.string().min(4),
});

function AddFormLs({refetchLifestyles}) {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [addLifeStyle, { data, error, isLoading }] = useAddLifeStyleMutation();

  const onSubmit = async (formData) => {
    console.log(formData);
    const newData = {
      LifeStyleName: formData.LifeStyle_name,
      styleType: formData.LifeStyle_Type,
      ImageURL: formData.LifeStyle_imgurl,
      Content: {
        story: formData.LifeStyle_Story,
      },
    };
    console.log(newData);

    try {
      const response = await addLifeStyle(newData);
      console.log(response.data); // Assuming response contains the data
      navigate("/lifestyles");
      refetchLifestyles();
      dispatch(setShowForm());
    } catch (err) {
      console.log(err);
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
            type="text"
            name="LifeStyle_imgurl"
            id="LifeStyle_imgurl"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("LifeStyle_imgurl")}
          />
          <label
            htmlFor="LifeStyle_imgurl"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image Url
          </label>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            {errors.LifeStyle_imgurl?.message}
          </span>
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
          {...register("LifeStyle_image")}
        />
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
          {errors.LifeStyle_image?.message}
        </span>
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
