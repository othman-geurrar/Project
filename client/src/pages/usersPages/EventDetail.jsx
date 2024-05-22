import { Button } from "@material-tailwind/react";
import React from "react";
import event from "../../assets/img/event.jpg";
import logo from "../../assets/img/logo.png";

function EventDetails() {
  return (
    <div>
      <section
        className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800 "
        style={{
          background:
            "linear-gradient(to left, #00DCBA, #00C3A5, #00A98F, #009079)",
        }}
      >
        <div className="container px-4 md:px-6 sm:mt-16 min-[320px]:mt-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] animate-fadeIn">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-slideInLeft">
                  Teck Med
                </h1>
                <p className="text-white md:text-xl dark:text-gray-400 animate-slideInRight">
                  June 14-16, 2024 | Rabat, Marocco
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  className="bg-gray-700 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors hover:bg-gray-500 animate-bounce"
                  variant="primary"
                >
                  Buy Tickets
                </Button>
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors hover:border-teal-800 animate-bounce"
                  variant="secondary"
                >
                  View Schedule
                </Button>
              </div>
            </div>
            <img
              alt="Web Summit 2024"
              className="mx-auto aspect-video overflow-hidden rounded object-cover sm:w-full lg:order-last lg:aspect-square animate-zoomIn"
              height="550"
              src={event}
              width="550"
            />
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                molestias possimus ut sunt expedita! Mollitia fuga est facere
                possimus tenetur molestiae quia. Inventore aperiam doloribus in
                facere odio expedita ipsum?
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold animate-slideInUp">Date</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-slideInDown">
                  June 14-16, 2024
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold animate-slideInUp">
                  Location
                </h3>
                <p className="text-gray-500 dark:text-gray-400 animate-slideInDown">
                  Rabat, Morocco
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
                variant="primary"
              >
                Buy Tickets
              </Button>
              <Button
                className="bg-gray-700 inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors hover:border-teal-300 animate-bounce"
                variant="secondary"
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
