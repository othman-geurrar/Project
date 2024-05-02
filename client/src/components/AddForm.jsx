import React, { useState , useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAddEventMutation } from "../redux/services/EventData";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "../redux/formState/form";
import { useNavigate } from "react-router-dom";
// import { addEventSuccess } from "../redux/formState/addEventSlice"; // Import the action creator for adding event success


function AddForm({refetchEvents}) {
    const navigate = useNavigate();
   const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventData, setEventData] = useState({
    EventName: "",
    Description: "",
    EventDate: "",
    Organizer: "",
    RegistrationDeadline: "",
    EventType: "",
    ImageURL: "",
  });
  const [addEvent, { isLoading, isError }] = useAddEventMutation();

  const handleChange = (date) => {
    setSelectedDate(date);
    setEventData({ ...eventData, EventDate: date });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEventData((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addedEvent = await addEvent(eventData).unwrap();
      console.log("Event added successfully", addedEvent);
      navigate("/events/list");
      refetchEvents();
      dispatch(setShowForm());
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };
  
  return (
    <div className="w-400 ">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="EventName"
            value={eventData.EventName}
            onChange={(e) => onChangeHandler(e)}
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="Description"
            value={eventData.Description}
            onChange={(e) => onChangeHandler(e)}
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="EventDate"
            value={eventData.EventDate}
            onChange={(e) => onChangeHandler(e)}
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Date
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="EventType"
            value={eventData.EventType}
            onChange={(e) => onChangeHandler(e)}
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Location
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="Organizer"
            value={eventData.Organizer}
            onChange={(e) => onChangeHandler(e)}
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Organization
          </label>
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
          className="my-6 font-large block mb-2 text-sm text-gray-500 dark:text-gray-400"
          htmlFor="user_avatar"
        >
          Upload File
        </label>
        <input
          className="mt-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
        <button
          type="submit"
          //   onClick={handleAddEvent}
          disabled={isLoading} // Disable button while loading
          className="mt-6 text-white bg-teal-600 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          {isLoading ? "Adding Event..." : "Submit"}
        </button>
        {isError && <div>Error adding event. Please try again.</div>}
      </form>
    </div>
  );
}

export default AddForm;
