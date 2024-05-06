import React, { useEffect, useState } from "react";
import {
  useDeleteEventMutation,
  useGetAlleventsQuery,
} from "../../redux/services/EventData";
import { AddFormEvent } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setShowEditForm } from "../../redux/formState/form";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";


const EventSection = () => {
  const { data, isLoading, isError, refetch } = useGetAlleventsQuery();
  const [deleteEvent, { data: deleteData, isLoading: loading, isError: err }] =
    useDeleteEventMutation();
  const [editingEvent, setEditingEvent] = useState(null);
  // const [showEditForm, setShowEditForm] = useState(false); // State to toggle edit form
  const showEditForm = useSelector((state) => state.form.showEditForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // This effect will refetch data whenever deleteData changes, indicating a successful deletion
    if (deleteData) {
      refetch(); // Refetch data
    }
  }, [deleteData, refetch]);

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleEdit = (item) => {
    console.log(item);
    setEditingEvent(item);
    dispatch(setShowEditForm());
  };
  const handleView = (item) => {
    navigate(`/events/${item.EventID}`);
  };

  console.log(data.events);
  const refetchEvents = () => {
    refetch(); // Refetch data after adding a new lifestyle
  };

  return (
    <>
      {showEditForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-slate-200 p-8 rounded shadow-lg">
            <div className="flex justify-between item-center mb-4">
            <h2 className="text-xl font-bold text-teal-600">Edit Event</h2>
            <button
              onClick={() => dispatch(setShowEditForm())}
              className="text-gray-600 hover:text-gray-800 text-teal-600 rounded-full text-xl"
            >
              <IoCloseCircleOutline/>
            </button>
          
            </div>

            <AddFormEvent
              refetchEvents={refetchEvents}
              editingEvent={editingEvent}
              setEditingEvent={setEditingEvent}
            />
          </div>
        </div>
      )}

      {data && (
        <div className="md:col-span-2 p-2 ml-4">
          {data.events.map((item, index) => (
            <div key={index} className=" p-4 ">
              <div className="flex justify-center">
                <div className="block rounded-lg justify-center h-fit bg-slate-200 shadow-secondary-2 dark:bg-surface-dark dark:text-white text-surface md:max-w-5xl">
                  <div className=" overflow-hidden bg-cover p-2">
                    <img className="rounded-t-lg" src={item.ImageURL} alt="" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2  font-bold leading-tight">
                      {item.EventName}
                    </h3>
                    <div>
                      <span className="font-semibold mb-3">
                      Location
                        <span className="text-xm font-medium">{item.Location}</span>
                      </span>
                      
                    </div>
                    <div>
                      <span className="font-semibold  mb-3">
                        Event Date :
                        <span className="text-xm font-medium">
                          {item.EventDate}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="p-2 ">
                    <button
                      className=" bg-blue-700 mr-3 rounded-xl p-2 min-w-20 text-slate-200 hover:bg-blue-500 hover:text-slate-100"
                      onClick={() => handleView(item)}
                    >
                      View
                    </button>
                    <button
                      className="bg-slate-500 mr-3 rounded-xl p-2 min-w-20 text-slate-200 hover:bg-slate-400 hover:text-slate-100"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 rounded-xl p-2 min-w-20 text-slate-200 hover:bg-red-400 hover:text-slate-100 "
                      onClick={() => {
                        handleDelete(item.EventID);
                      }}
                    >
                      <span className=" text-white">Delete</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default EventSection;
