import React from 'react'
import { Carousel, DarkThemeToggle, } from "flowbite-react";
import { Accessorie, Footer, IntsaFollow, MainNav, NavBaar, NewsLetter } from '../../components'
import {ProductCard} from '../../components'
import {ProductComponent} from '../../components'


const LandingPage = () => {
  return (
    <div className="h-screen landing">
      {/* <MainNav /> */}
      <NavBaar />
      <Carousel slideInterval={5000}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          {/* Slide 1 */}
          <div
            className="flex justify-center items-center hero p-6 h-full w-full   bg-cover bg-center bg-opacity-10"
            style={{
              backgroundImage:
                "url('https://379d36152a1e77a55968-de42d31b613abd6f9c08e9e6b98789df.ssl.cf1.rackcdn.com/corinne_folio.jpg')",
            }}
          >
            <div
              className="Content "
              style={{ position: "absolute", bottom: 80, left: 70 }}
            >
              <h1 className="text-5xl py-2 font-bold text-slate-200">
                {" "}
                Live With <span>Fashion</span>
              </h1>
              <h2 className="text-xl py-2 font-semibold text-slate-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                sed <br />
                odio, provident dolore nulla error mollitia nam! Except
              </h2>
              <button className="mt-2 px-8 py-2 rounded-xl text-xl font-semibold bg-teal-600 text-white hover:bg-teal-500 ">
                {" "}
                View{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          {/* Slide 2 */}
          <div
            className="flex justify-center items-center hero p-6 h-full w-full bg-cover bg-center bg-opacity-10"
            style={{
              backgroundImage:
                "url('https://www.apetogentleman.com/wp-content/uploads/2024/05/ape-may-24.jpg')",
            }}
          >
            <div
              className="Content "
              style={{ position: "absolute", bottom: 80, left: 70 }}
            >
              <h1 className="text-5xl py-2 font-bold text-slate-200">
                {" "}
                Live With <span>Fashion</span>
              </h1>
              <h2 className="text-xl py-2 font-semibold text-slate-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                sed <br />
                odio, provident dolore nulla error mollitia nam! Except
              </h2>
              <button className="mt-2 px-8 py-2 rounded-xl text-xl font-semibold bg-teal-600 text-white hover:bg-teal-500 ">
                {" "}
                View{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          {/* Slide 3 */}
          <div
            className="flex justify-center items-center hero p-6 h-full w-full bg-cover bg-center bg-opacity-10"
            style={{
              backgroundImage:
                "url('https://osaythelabel.com/cdn/shop/files/000015200010_1800x.jpg?v=1697136305')",
            }}
          >
            <div
              className="Content "
              style={{ position: "absolute", bottom: 80, left: 70 }}
            >
              <h1 className="text-5xl py-2 font-bold text-slate-200">
                {" "}
                Live With <span>Fashion</span>
              </h1>
              <h2 className="text-xl py-2 font-semibold text-slate-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                sed <br />
                odio, provident dolore nulla error mollitia nam! Except
              </h2>
              <button className="mt-2 px-8 py-2 rounded-xl text-xl font-semibold bg-teal-600 text-white hover:bg-teal-500 ">
                {" "}
                View{" "}
              </button>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="mt-14    text-center h-fit"
      style={{ boxShadow: "inset -1px 1px 20px 8px #0000000d" }}>
        <Accessorie />
      </div>
      <div className="mt-24 mx-4 glass  rounded-md h-fit p-8 bg-cover bg-product-bg  ">
        <ProductComponent />
      </div>
      <div className="items-center justify-center " 
      style={{ boxShadow: "inset -1px 1px 20px 8px #0000000d" }}>

        <NewsLetter />
      </div>

      <IntsaFollow />
      <Footer />
    </div>
  );
}

export default LandingPage