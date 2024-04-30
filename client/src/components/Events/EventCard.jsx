import React from "react";

const EventCard = () => {
  const events = [
    {
      name: "New Event is released!",
      description: "Click the button to book your place.",
      date: "2024-04-30",
      location: "CasaBlanca",
      image: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
    },
    // Add more event objects as needed
    {
        name: "New Event is released!",
        description: "Click the button to book your place.",
        date: "2024-04-30",
        location: "Rabat",
        image: "https://craftworldevents.com/wp-content/uploads/2022/10/Corporate-Events.jpg",
      },
      {
        name: "New Event is released!",
        description: "Click the button to book your place.",
        date: "2024-04-30",
        location: "Tanger",
        image: "https://content.wepik.com/statics/522728382/preview-page0.jpg",
      },
      {
        name: "New Event is released!",
        description: "Click the button to book your place.",
        date: "2024-04-30",
        location: "Fes",
        image: "https://www.anime-japan.jp/2023/img/index/img_sld-1_2023_e.jpg",
      },
  ];

  return (
    <div>
      {events.map((event, index) => (
        <div key={index} className="card w-full card-side bg-base-100 shadow-xl gap-10 my-10">
          <figure>
            <img
              className="w-100 h-65 bg-cover"
              src={event.image}
              alt={event.name}
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">{event.name}</h2>
            <p>{event.description}</p>
            <p className="text-lg "><span className=" font-bold "> Date:</span> {event.date}</p>
            <p><span className=" font-bold ">Location: </span> {event.location}</p>
            <div className=" justify-end">
              <button className="btn mr-2 btn-primary"><span className=" text-white">View</span></button>
              <button  className="btn mr-2 bg-slate-400"><span className=" text-white">Edit</span></button>
              <button  className="btn mr-2 bg-red-600 hover:bg-red-400 "> <span className=" text-white">Delete</span> </button>
            </div> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
