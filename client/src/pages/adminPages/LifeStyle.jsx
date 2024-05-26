import React, { useState } from "react";
// bg-[url("/src/assets/img/sport_bg.jpg")]
import LifestyleSection from "../../components/AdminBackLock/LifeStyle/LifestyleSection";
import { MdAdd } from "react-icons/md";
import { setShowForm } from "../../redux/formState/form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AddFormLs } from "../../components";
import { useGetAllLifeStyleQuery } from "../../redux/services/LifeStyleData";
import { useDispatch, useSelector } from "react-redux";


const LifeStyle = () => {
  const { data, isLoading, isError, refetch } = useGetAllLifeStyleQuery();
  const showForm = useSelector((state) => state.form.showForm);
  const dispatch = useDispatch();

  const refetchLifestyles = () => {
    refetch(); // Refetch data after adding a new lifestyle
  };
  const toggleForm = () => {
    dispatch(setShowForm());
  };
  return (
    <div className="block">
      <h1 className="mt-26 md:mt-4 pl-8 pb-4 text-3xl font-bold text-teal-500">
        Life Style
      </h1>
      <div className="flex flex-wrap md:justify-start md:px-8">
        <button
          className="btn  bg-teal-600 hover:bg-teal-500"
          onClick={toggleForm}
        >
          <MdAdd />
          Add LifeStyle
        </button>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-slate-200 p-8 rounded shadow-lg">
            <div className="flex justify-between items-center mb-4">
              
              <h2 className="text-xl font-bold text-teal-600">
                Add Life Style
              </h2>
              <button
                onClick={toggleForm}
                className=" text-gray-600 hover:text-gray-800 text-teal-600 rounded-full text-xl"
              >
                <IoCloseCircleOutline />
              </button>
            </div>
            <AddFormLs refetchLifestyles={refetchLifestyles} />
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-18 mx-8">
        <LifestyleSection />

        {/* Product section */}
        {/* <div className="px-8 pt-6 ">
          <p
            className="
          text-start text-lg mb-2 font-semibold text-gray-800 dark:text-gray-100 
          "
          >
            {" "}
            Produtcts Related:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap xs:justify-center ">
            <ProductCard />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LifeStyle;