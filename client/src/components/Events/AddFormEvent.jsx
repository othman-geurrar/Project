import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  useAddEventMutation,
  useUpdateEventMutation,
} from "../../redux/services/EventData";
import * as zod from "zod";
import { useDispatch } from "react-redux";
import { setShowForm } from "../../redux/formState/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { setShowEditForm } from "../../redux/formState/form";

const schema = zod.object({
  EventName: zod.string(),
  Description: zod.string(),
  Organizer: zod.string(),
  ImageURL: zod.string(),
});

function AddFormEvent({ refetchEvents, editingEvent, setEditingEvent }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });
  const [addEvent, { error, isLoading }] = useAddEventMutation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [updatEvent] = useUpdateEventMutation();

  useEffect(() => {
    reset({
      EventName: editingEvent ? editingEvent.EventName : "",
      Description: editingEvent ? editingEvent.Description : "",
      Organizer: editingEvent ? editingEvent.Organizer : "",
      ImageURL: editingEvent ? editingEvent.ImageURL : "",
    });
    setSelectedDate(editingEvent ? new Date(editingEvent.EventDate) : null);
  }, [editingEvent, reset]);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = async (formData) => {
    console.log(formData);
    const newData = {
      EventName: formData.EventName,
      Description: formData.Description,
      Organizer: formData.Organizer,
      ImageURL: formData.ImageURL,
      EventDate: selectedDate,
    };
    if (editingEvent) {
      try {
        console.log(editingEvent);
        const response = await updatEvent({
          id: editingEvent.EventID,
          event: newData,
        });
        console.log(response.data);
        refetchEvents();
        setEditingEvent(null);
        dispatch(setShowEditForm());
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await addEvent(newData);
        console.log(response.data);
        refetchEvents();
        dispatch(setShowForm());
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
            name="EventName"
            id="EventName"
            defaultValue={editingEvent ? editingEvent.EventName : ""}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            {...register("EventName")}
            required
          />
          <label
            htmlFor="EventName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Name
          </label>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            {errors.EventName?.message}
          </span>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="Description"
            id="Description"
            defaultValue={editingEvent ? editingEvent.EventDescription : ""}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            {...register("Description")}
          />
          <label
            htmlFor="Description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            {errors.Description?.message}
          </span>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="textarea"
            name="Organizer"
            id="Organizer"
            defaultValue={editingEvent ? editingEvent.Organizer : ""}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("Organizer")}
          />
          <label
            htmlFor="Organizer"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Organizer
          </label>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            {errors.Organizer?.message}
          </span>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="ImageURL"
            id="ImageURL"
            defaultValue={editingEvent ? editingEvent.ImageURL : ""}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("ImageURL")}
          />
          <label
            htmlFor="ImageURL"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image Url
          </label>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            {errors.ImageURL?.message}
          </span>
        </div>
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select a date"
            className="block w-full px-4 py-2 mt-2 text-gray-400 bg-gray border border-gray-200 rounded-md shadow-sm focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
          />
          {selectedDate && (
            <p>You selected: {selectedDate.toLocaleDateString()}</p>
          )}
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
          // onChange={(e)=> handlePhoto(e)}
        />
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
          {errors.Event_image?.message}
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

export default AddFormEvent;
