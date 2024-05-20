import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "@mui/material";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useGetAlleventsQuery } from "../../redux/services/EventData";
import { useNavigate } from "react-router-dom";

function EventPage() {
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [closestEvent, setClosestEvent] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowMore(!showMore);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleView = (item) => {
    navigate(`/event/${item.EventID}`);
  };

  const { data, isLoading, isError, refetch } = useGetAlleventsQuery();

  useEffect(() => {
    if (data && data.events.length > 0) {
      const sortedEvents = [...data.events].sort(
        (a, b) => new Date(a.EventDate) - new Date(b.EventDate)
      );
      setClosestEvent(sortedEvents[0]);
    }
  }, [data]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  return (
    <>
      {closestEvent && (
        <div>
          <figure className="relative h-full w-full">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${closestEvent.ImageURL})`,
              }}
            >
              <div className="hero-overlay bg-opacity-30"></div>
            </div>
            <figcaption className="absolute bottom-0 left-2/4 flex flex-col sm:flex-row h-[calc(30%-4rem)] w-[calc(100%-4rem)] -translate-x-2/4 translate-y-2/4 justify-around rounded-xl border border-white bg-white/50 py-4 px-6 shadow-lg shadow-black saturate-500 backdrop-blur-sm ">
              <div className="mb-4 sm:mb-0">
                <Typography variant="h5" color="blue-gray">
                  {closestEvent.EventName}
                </Typography>
                <Typography color="gray" className="mt-2 font-normal">
                  {formatDate(closestEvent.EventDate)}
                </Typography>
              </div>
              <div className="mb-4 sm:mb-0">
                <Typography variant="h5" color="blue-gray">
                  Place
                </Typography>
                <Typography color="gray" className="mt-2 font-normal">
                  {closestEvent.Location}
                </Typography>
              </div>
              <div>
                <Typography variant="h5" color="blue-gray">
                  Time
                </Typography>
                <Typography color="gray" className="mt-2 font-normal">
                  {formatTime(closestEvent.EventDate)}
                </Typography>
              </div>
            </figcaption>
          </figure>
        </div>
      )}
      <div className="mt-10 mx-8">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-8 px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="grid gap-1 w-full">
                <input
                  type="text"
                  placeholder="Search here ..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full mt-6 p-4 border-b border-slate-700 rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mt-4">
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold tracking-tight">
                  Shop by Category
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Discover products tailored to your interests.
                </p>
              </div>
            </div>
            {data && (
              <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-6 md:gap-8">
                {data.events.map((item, index) => (
                  <div
                    key={index}
                    className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg"
                  >
                    <Link
                      className="absolute inset-0 z-10"
                      onClick={() => handleView(item)}
                    >
                      <span className="sr-only">View</span>
                    </Link>
                    <img
                      alt="Cover image"
                      className="[grid-area:stack] object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
                      height={400}
                      src={item.ImageURL}
                      width={300}
                    />
                    <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                      <h3 className="font-semibold text-lg tracking-tight">
                        {item.EventName}
                      </h3>
                      <p className="text-sm leading-normal">{item.Location}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* <div className="flex justify-center my-8">
            <Button
              variant="outlined"
              className="flex items-center"
              onClick={handleButtonClick}
            >
              {showMore ? (
                <MdExpandLess className="mr-2 h-4 w-4" />
              ) : (
                <MdExpandMore className="mr-2 h-4 w-4" />
              )}
              {showMore ? "Show Less" : "Show More"}
            </Button>
          </div> */}
        </section>
      </div>
    </>
  );
}

export default EventPage;
