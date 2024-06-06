import { Footer, NavBaar } from "../../components";

export default function AboutUs() {
  return (
    <>
      <NavBaar />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 mt-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About OSAY</h2>
              <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Welcome to OSAY, where we celebrate the rich tapestry of lifestyles that define us. Born from the need to
                centralize diverse choices, we're the platform that opens doors to global lifestyles. At OSAY, choice and
                personalization are paramount. Explore a curated selection of products and accessories tailored to your
                unique preferences and way of life. With us, expressing your individuality is effortless, empowering you
                to shop confidently and authentically. Discover the lifestyle that resonates with you and make it your own
                at OSAY.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  To leverage the power of technology to deliver a seamless and enjoyable shopping experience for our
                  customers, while continuously expanding our product offerings to meet their evolving needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Values</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Integrity, innovation, customer-centricity, and a relentless pursuit of excellence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Accomplishments</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Recognized as a leading e-commerce store, with numerous awards and accolades for our exceptional
                  customer service, diverse product selection, and innovative shopping features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}