import React, { useState } from "react";
import EventCard from "../../components/Events/EventCard";
import { MdAdd } from "react-icons/md";

const EventList = () => {
  const [showForm , setShowForm ] = useState(false);
  return (
    <div className=" block ">
      <h1 className="mt-26 md:mt-4 pl-14 pb-6 text-3xl font-bold text-teal-700">
        Events
      </h1>
      <div className="flex flex-wrap md:justify-end  md:px-8">
        <button className="btn glass bg-green-500 hover:bg-green-300" onClick={()=> setShowForm(!showForm)}>
          {" "}
          <MdAdd />
          Add Event
        </button>
      </div>
      <div className="flex flex-wrap gap-10 pl-14 w-full h-screen ">
        <EventCard />
        {showForm && <div> Add New Event</div>}
      </div>
    </div>
  );
};

export default EventList;
