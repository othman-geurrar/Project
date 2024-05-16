import React, { useState } from "react";
import EventSection from "../../components/AdminBackLock/Events/EventSection";
import { MdAdd } from "react-icons/md";
import { setShowForm } from "../../redux/formState/form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AddFormEvent } from "../../components";
import { useGetAlleventsQuery } from "../../redux/services/EventData";
import { useDispatch, useSelector } from "react-redux";

const Event = () => {
  const { data, isLoading, isError, refetch } = useGetAlleventsQuery();
  const showForm = useSelector((state) => state.form.showForm);
  const dispatch = useDispatch();

  const refetchEvents = () => {
    refetch(); // Refetch data after adding a new lifestyle
  };

  const toggleForm = () => {
    dispatch(setShowForm());
  };

  return (
    <div className="block">
      <h1 className="mt-26 md:mt-4 pl-8 pb-6 text-3xl font-bold text-teal-500">
        Events
      </h1>
      <div className="flex flex-wrap md:justify-start md:px-8">
        <button
          className="btn  bg-teal-600 hover:bg-teal-500"
          onClick={toggleForm}
        >
          <MdAdd />
          Add Event
        </button>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-slate-200 p-8 rounded shadow-lg">
            <div className="flex justify-between item-center mb-4">
              <h2 className="text-xl font-bold text-teal-600">Add Event</h2>
              <button
                onClick={toggleForm}
                className="text-gray-600 hover:text-gray-800 text-teal-600 rounded-full text-xl"
              >
                <IoCloseCircleOutline />
              </button>
            </div>
            <AddFormEvent refetchEvents={refetchEvents} />
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-18 mx-8">
        <EventSection />
      </div>
    </div>
  );
};

export default Event;
