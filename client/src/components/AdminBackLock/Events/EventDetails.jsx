import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetEventByIdQuery } from "../../../redux/services/EventData";

function EventDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetEventByIdQuery(id);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (data && data.EventDate) {
      const eventDate = new Date(data.EventDate);
      const updateCountdown = () => {
        const now = new Date();
        const timeDifference = eventDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      };

      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [data]);

  if (isLoading) {
    return <div className="flex flex-col gap-4 w-52">
    <div className="skeleton h-64 w-full"></div>
    <div className="skeleton h-12 w-28"></div>
    <div className="skeleton h-12 w-full"></div>
    <div className="skeleton h-12 w-full"></div>
  </div>;
  }

  if (isError) {
    return <div>Error loading event details.</div>;
  }

  return (
    <div className="p-4 m-4 rounded-lg">
      <div
        className="hero min-h-screen rounded-xl relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${data?.ImageURL})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{data?.EventName}</h1>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1 md:row-span-4">
          <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <div
              aria-hidden="true"
              className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-sky-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
            ></div>
            <div className="relative">
              <h1 className="text-2xl font-bold mb-4">Description:</h1>
              <p className="mt-4 font-sans text-lg">{data?.Description}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 text-center">
          <div className="col-span-1 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span>{countdown.days}</span>
            </span>
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl">days</span>
          </div>
          <div className="col-span-1 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span>{countdown.hours}</span>
            </span>
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl">hours</span>
          </div>
          <div className="col-span-1 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span>{countdown.minutes}</span>
            </span>
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl">min</span>
          </div>
          <div className="col-span-1 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span>{countdown.seconds}</span>
            </span>
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl">sec</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
