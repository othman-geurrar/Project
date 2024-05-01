import React, { useState } from "react";
import EventCard from "../../components/Events/EventCard";
import { MdAdd } from "react-icons/md";
import AddForm from "../../components/AddForm";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "../../redux/formState/form";

const EventList = () => {
  const showForm = useSelector((state) => state.form.showForm);
  const dispatch = useDispatch();

  const toggleForm = () => {
    dispatch(setShowForm());
  };

  return (
    <div className="block">
      <h1 className="mt-26 md:mt-4 pl-14 pb-6 text-3xl font-bold text-teal-700">
        Events
      </h1>
      <div className="flex flex-wrap md:justify-end md:px-8">
        <button
          className="btn glass bg-teal-500 hover:bg-teal-400"
          onClick={toggleForm}
        >
          <MdAdd />
          Add Event
        </button>
      </div>
      <div className="flex flex-wrap gap-10 pl-14 w-full h-screen">
        <EventCard />
        {showForm && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg">
              <button
                onClick={toggleForm}
                className="absolute top-15 right-115 mt-4 text-gray-600 hover:text-gray-800 text-teal-600 rounded-full text-xl"
              >
                <IoCloseCircleOutline />
              </button>
              <h2 className="text-xl font-bold mb-4 text-teal-600">
                Add Event
              </h2>
              <AddForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;