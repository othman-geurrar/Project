import React from 'react'
import { Carousel, DarkThemeToggle, } from "flowbite-react";
import { MainNav } from '../../components'
import {ProductCard} from '../../components'
import {ProductComponent} from '../../components'

const LandingPage = () => {
  return (
    <div className='h-screen'>
        <MainNav />
        <Carousel  slideInterval ={5000} >
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            {/* Slide 1 */}
          <div
          className="flex justify-center items-center hero p-6 h-full w-full   bg-cover bg-center bg-opacity-10"
          style={{
              backgroundImage:
              "url('https://379d36152a1e77a55968-de42d31b613abd6f9c08e9e6b98789df.ssl.cf1.rackcdn.com/corinne_folio.jpg')",
            }}
        >
          <div className="Content " style={{ position: 'absolute', bottom: 40, left: 40 }}>
            <h1 className="text-5xl py-2 font-bold text-slate-200"> Live With <span>Fashion</span></h1>
            <h2 className="text-xl py-2 font-semibold text-slate-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime sed <br />odio, provident dolore nulla error mollitia nam! Except</h2>
            <button className="mt-2 px-8 py-2 rounded-xl text-xl font-semibold bg-teal-600 text-white hover:bg-teal-500 "> View </button>
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
          <div className="Content " style={{ position: 'absolute', bottom: 40, left: 40 }}>
            <h1 className="text-5xl py-2 font-bold text-slate-200"> Live With <span>Fashion</span></h1>
            <h2 className="text-xl py-2 font-semibold text-slate-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime sed <br />odio, provident dolore nulla error mollitia nam! Except</h2>
            <button className="mt-2 px-8 py-2 rounded-xl text-xl font-semibold bg-teal-600 text-white hover:bg-teal-500 "> View </button>
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
          <div className="Content " style={{ position: 'absolute', bottom: 40, left: 40 }}>
            <h1 className="text-5xl py-2 font-bold text-slate-200"> Live With <span>Fashion</span></h1>
            <h2 className="text-xl py-2 font-semibold text-slate-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime sed <br />odio, provident dolore nulla error mollitia nam! Except</h2>
            <button className="mt-2 px-8 py-2 rounded-xl text-xl font-semibold bg-teal-600 text-white hover:bg-teal-500 "> View </button>
          </div>
          
        </div>
          </div>
        </Carousel>
        <div className="mt-24 mx-4 rounded-md h-fit p-8 bg-cover bg-product-bg  ">
          <ProductComponent />
        </div>
        <div className="mt-14 text-center h-fit">
          <h1 className="text-3xl my-12 font-Kalam font-bold text-teal-700"> Check Our New Life Style</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl mx-auto py-12 md:py-16">
        <div className="relative overflow-hidden rounded-lg">
          <img
            alt="Background Image"
            className="w-full h-[500px] md:h-[600px] object-cover"
            height="500"
            src="https://osaythelabel.com/cdn/shop/files/osay081823_309-min_x800.jpg?v=1698322969"
            style={{
              aspectRatio: "800/500",
              objectFit: "cover",
            }}
            width="800"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl pt-28 font-Kalam font-semibold  text-xl text-gray-200">Discover Our Latest Products</h2>
          </div>
        </div>
        <div className="grid gap-6">
          <Carousel >
          <div className="grid h-fit grid-cols-2 gap-4 ">
            <div className="grid gap-2 h-80 md:h-fit w-fit py-2 justify-center items-center">
              <ProductCard title="key" price={20} image="https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>
            <div className="grid gap-2 h-80 md:h-fit w-fit py-2 justify-center items-center">
              <ProductCard title="key" price={20} image="https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>
      
          </div>
          <div className="grid h-fit grid-cols-2 gap-4 ">
            <div className="grid gap-2 h-80 md:h-fit w-fit py-2 justify-center items-center">
              <ProductCard title="key" price={20} image="https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>
            <div className="grid gap-2 h-80 md:h-fit w-fit py-2 justify-center items-center">
              <ProductCard title="key" price={20} image="https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>
      
          </div>  
          </Carousel>
          
        
        </div>
      </div>

        </div>
    </div>
  )
}

export default LandingPage