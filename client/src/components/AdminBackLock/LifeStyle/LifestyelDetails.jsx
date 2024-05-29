import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetLifeStyleByIdQuery } from "../../../redux/services/LifeStyleData";

const LifestyelDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = useGetLifeStyleByIdQuery(id);

  console.log(data);

  return (
    <div className="grid  md:grid-cols-3 md:grid-rows-12 md:gap-10 gap-6 p-6 h-screen  overflow-scroll mb-10 ">
      {/* Image Section */}
      <div className="mt-10 md:col-span-3 md:row-span-8 grid-s rounded-md ">
        <img
          className=" object-fill rounded-md w-full h-full md:object-cover md:object-left-top"
          src={`${data?.ImageURL}`}
          alt="Lifestyle image"
        />
      </div>

      {/* Lifestyle Information : */}
      <div className=" md:col-span-2 md:row-span-4 ">
        <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
          <div
            aria-hidden="true"
            className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-sky-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
          ></div>
          <div className="relative">
            <h1 className=" text-2xl font-bold mb-4">
              {" "}
              {data?.LifeStyleName}{" "}
            </h1>
            <h3 className=" font-semibold text-lg"> {data?.styleType} </h3>
            <p className="mt-4 font-sans text-lg">
              {" "}
              {data?.Content.description}{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Up Coming Event */}
      <div className="md:col-span-1 md:row-span-4  ">
        <h1 className="text-2xl font-bold font-mono mb-4 text-[#63cade]">
          {" "}
          Up Coming Events{" "}
        </h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
          <img
            src="https://www.universityoffashion.com/blog/wp-content/uploads/2019/11/Louis-Vuittons-spring-2020-show.-vogue.jpg"
            alt="Project Image"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Event Title</h3>
            <p className="text-gray-700">
              This project is so cool, even my cat approves! 🐱
            </p>
            <a href="#" className="block text-blue-600 hover:underline mt-4">
              View More 🚀
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifestyelDetails;