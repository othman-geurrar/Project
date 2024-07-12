import { useParams } from "react-router-dom";
import { useGetEventByIdQuery } from "../../../redux/services/EventData";
function EventDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetEventByIdQuery(id);
  console.log(data);

  return (
    <div className="p-4 m-4 rounded-lg">
      <div
        className="hero min-h-screen rounded-xl relative bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${data?.ImageURL})`,
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
        <div className=" md:col-span-1 md:row-span-4 ">
          <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <div
              aria-hidden="true"
              className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-sky-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
            ></div>
            <div className="relative">
              <h1 className=" text-2xl font-bold mb-4"> Description : </h1>
              <p className="mt-4 font-sans text-lg">{data?.Description}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 text-center ">
          <div className="col-span-1 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl">
              days
            </span>
          </div>
          <div className="col-span-1 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl">
              hours
            </span>
          </div>
          <div className="col-span-1 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl">
              min
            </span>
          </div>
          <div className="col-span-1 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span style={{ "--value": 52 }}></span>
            </span>
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl">
              sec
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;