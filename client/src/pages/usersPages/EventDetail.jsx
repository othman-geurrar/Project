import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useGetEventByIdQuery } from "../../redux/services/EventData";
import logo from "../../assets/logo.png";

function EventDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetEventByIdQuery(id);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{
            backgroundImage: `url(${data?.ImageURL})`,
          }}
        />
        <div className="container px-4 md:px-6 relative ">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="space-y-4"> 
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                {data?.EventName}
              </h1>
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">
                {data?.Location}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 animate-fadeIn">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slideInLeft">
                Event Details
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-slideInRight">
                {data?.Description}
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold animate-slideInUp">Date</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-slideInDown">
                  {formatDate(data?.EventDate)}
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold animate-slideInUp">
                  Location
                </h3>
                <p className="text-gray-500 dark:text-gray-400 animate-slideInDown">
                  {data?.Location}
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold animate-slideInUp">Tickets</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-slideInDown">
                  General admission, student, and group tickets available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 text-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Speakers
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from industry leaders and experts on the latest trends and
              innovations in technology.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 animate-zoomIn">
              <img
                alt="Jane Doe"
                className="aspect-square rounded-full object-cover"
                height="100"
                src={logo}
                width="100"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold">Jane Doe</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  CEO, Acme Inc
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 animate-zoomIn">
              <img
                alt="John Smith"
                className="aspect-square rounded-full object-cover"
                height="100"
                src={logo}
                width="100"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold">John Smith</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  CTO, Acme Inc
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 animate-zoomIn">
              <img
                alt="Sarah Lee"
                className="aspect-square rounded-full object-cover"
                height="100"
                src={logo}
                width="100"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold">Sarah Lee</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Head of Product, Acme Inc
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 animate-zoomIn">
              <img
                alt="Michael Johnson"
                className="aspect-square rounded-full object-cover"
                height="100"
                src={logo}
                width="100"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold">Michael Johnson</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Lead Engineer, Acme Inc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 animate-fadeIn">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slideInLeft">
                Get Your Tickets Now
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-slideInRight">
                Don't miss out on the biggest tech event of the year. Secure
                your spot today and join us in Lisbon for 3 days of networking,
                learning, and discovery.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button
                className="bg-gray-700 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors hover:bg-teal-600 animate-bounce"
                variant="filled"
              >
                Buy Tickets
              </Button>
              <Button
                className="bg-gray-700 inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors hover:border-teal-300 animate-bounce"
                variant="gradient"
              >
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;