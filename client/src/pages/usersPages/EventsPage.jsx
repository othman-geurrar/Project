import React from "react";
import Vortex from "../../components/ui/Vortex"; // Ensure this path is correct
import { EventCard, Footer, IntsaFollow, MainNav } from "../../components";
import { useGetAlleventsQuery } from "../../redux/services/EventData";

export default function EventPage() {
  const {data } = useGetAlleventsQuery();
  return (
    <>
      <MainNav />
      <div className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Discover Amazing Events with Us!          </h2>
          <p className="text-white text-sm md:text-[20px] leading-6	 max-w-xl mt-6 text-center">
          Welcome to OSAY Events! Experience inspiration, education, and entertainment with our diverse range of conferences, festivals, and more,
           catering to all interests and industries.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              View Events
            </button>
            <button className="px-4 py-2 text-white">Watch trailer</button>
          </div>
        </Vortex>
      </div>
      <div className="flex flex-wrap my-14 gap-8 justify-center h-fit">
        {data?.events.map((event, i) => {
          return <EventCard key={i} event={event} />;
        })}
      </div>
      <div>
        
      </div>
      <div className="block mt-38">
      <IntsaFollow />
        <Footer />
      </div>
    </>
  );
}