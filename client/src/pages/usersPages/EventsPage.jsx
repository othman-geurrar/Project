import React, { useState } from "react";
import event from "../../assets/img/event.jpg";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "@mui/material";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { Footer, MainNav, NavBaar } from "../../components";

function EventPage() {
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleButtonClick = () => {
    setShowMore(!showMore);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const cards = [
    {
      title: "Apparel",
      description: "Discover the latest fashion trends.",
    },
    {
      title: "Electronics",
      description: "Upgrade your tech with the latest gadgets.",
    },
    {
      title: "Home & Garden",
      description: "Elevate your living space with our home essentials.",
    },
    {
      title: "Beauty & Personal Care",
      description: "Discover products to help you look and feel your best.",
    },
    {
      title: "Sports & Outdoors",
      description: "Gear up for your next adventure.",
    },
    {
      title: "Toys & Games",
      description: "Fun for all ages.",
    },
    {
      title: "Automotive",
      description: "Everything you need for your vehicle.",
    },
    {
      title: "Books",
      description: "Explore a world of literature.",
    },
    {
      title: "Apparel",
      description: "Discover the latest fashion trends.",
    },
    {
      title: "Electronics",
      description: "Upgrade your tech with the latest gadgets.",
    },
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <NavBaar />
      <div>
        <figure className="relative h-full w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${event})`,
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
          </div>
          <figcaption className="absolute bottom-0 left-2/4 flex flex-col sm:flex-row h-[calc(30%-4rem)] w-[calc(100%-4rem)] -translate-x-2/4 translate-y-2/4 justify-around rounded-xl border border-white bg-white/50 py-4 px-6 shadow-lg shadow-black saturate-500 backdrop-blur-sm ">
            <div className="mb-4 sm:mb-0">
              <Typography variant="h5" color="blue-gray">
                Search
              </Typography>
              <Typography color="gray" className="mt-2 font-normal">
                20 July 2022
              </Typography>
            </div>
            <div className="mb-4 sm:mb-0">
              <Typography variant="h5" color="blue-gray">
                Place
              </Typography>
              <Typography color="gray" className="mt-2 font-normal">
                20 July 2022
              </Typography>
            </div>
            <div>
              <Typography variant="h5" color="blue-gray">
                Time
              </Typography>
              <Typography color="gray" className="mt-2 font-normal">
                20 July 2022
              </Typography>
            </div>
          </figcaption>
        </figure>
      </div>
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
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredCards
                .slice(0, showMore ? filteredCards.length : 4)
                .map((card, index) => (
                  <div
                    key={index}
                    className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg"
                  >
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">View</span>
                    </Link>
                    <img
                      alt="Cover image"
                      className="[grid-area:stack] object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
                      height={400}
                      src={event}
                      width={300}
                    />
                    <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                      <h3 className="font-semibold text-lg tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-center my-8">
            <Button
              variant="outline"
              className="flex items-center bg-black"
              onClick={handleButtonClick}
            >
              {showMore ? (
                <MdExpandLess className="mr-2 h-4 w-4" />
              ) : (
                <MdExpandMore className="mr-2 h-4 w-4" />
              )}
              {showMore ? "Show Less" : "Show More"}
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default EventPage;
