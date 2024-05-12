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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const schema = zod.object({
  EventName: zod.string(),
  Description: zod.string(),
  Organizer: zod.string(),
  Location: zod.string(),
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
  const [image, setImage] = useState(null);

  const handlePhoto = async (event) => {
    const file = event.target.files[0];
    console.log(file);
  
    const resizedFile = await resizeImage(file, { maxWidth: 800, maxHeight: 600, quality: 0.8 });
    setImage(resizedFile);
  };
  
  const resizeImage = (file, options) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = options.maxWidth;
          canvas.height = options.maxHeight;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob((blob) => {
            resolve(new File([blob], file.name, { type: file.type }));
          }, file.type, options.quality);
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  };
  
  
  

  useEffect(() => {
    reset({
      EventName: editingEvent ? editingEvent.EventName : "",
      Description: editingEvent ? editingEvent.Description : "",
      Organizer: editingEvent ? editingEvent.Organizer : "",
      Location: editingEvent ? editingEvent.Location : "",
      EventDate: editingEvent ? new Date(editingEvent.EventDate) : null,
      ImageURL: editingEvent ? editingEvent.ImageURL : "",
    });
    setSelectedDate(editingEvent ? new Date(editingEvent.EventDate) : null);
  }, [editingEvent, reset]);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

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

    console.log(formData);

    const newData = {
      EventName: formData.EventName,
      Description: formData.Description,
      Organizer: formData.Organizer,
      Location: formData.Location,
      ImageURL: await uploadImage(),
      EventDate: selectedDate,
    };
    console.log(newData);
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
        toast.success('New Event added successfully!', {
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
    <div className="w-400 ">
      <form className=" max-w-3xl mx-auto " onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="EventName"
            id="EventName"
            defaultValue={editingEvent ? editingEvent.EventName : ""}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            {...register("EventName")}
            required
          />
          <label
            htmlFor="EventName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="Description"
            defaultValue={editingEvent ? editingEvent.EventDescription : ""}
            id="Description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            {...register("Description")}
            required
          />
          <label
            htmlFor="Description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group"></div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="Organizer"
            id="Organizer"
            defaultValue={editingEvent ? editingEvent.Organizer : ""}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            {...register("Organizer")}
            required
          />
          <label
            htmlFor="Organizer"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Organizer
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="Location"
            id="Location"
            defaultValue={editingEvent ? editingEvent.Location : ""}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            {...register("Location")}
            required
          />
          <label
            htmlFor="Location"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Location
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group"></div>
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
          htmlFor="image"
        >
          Upload File
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
          //   onClick={handleAddEvent}
          disabled={isLoading} // Disable button while loading
          className="mt-6 text-white bg-teal-600 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          {isLoading ? "Adding Event..." : "Submit"}
        </button>
        {error && <div>Error adding event. Please try again.</div>}
      </form>
    </div>
  );
}

export default AddFormEvent;
