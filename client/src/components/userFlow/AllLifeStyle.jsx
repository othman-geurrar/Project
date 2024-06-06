
 
import { Link } from "react-router-dom"
import img1 from '../../assets/img/traditionnel.png'
import heroS from '../../assets/heroS.jpg'
import sport from '../../assets/sport1.jpg'
import travel from '../../assets/travel.jpg'
import anime from '../../assets/anime.jpg'

export default function AllLifeStyle() {
  return (
    <section className="w-full  md:py-24 lg:py-24 bg-gray-100 dark:bg-gray-800">
       <div className="text-center text-[30px] md:text-[46px] mb-6 font-followus text-[#484848]">
            Our Lifestyles
          </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link to={"/lifestyles/detail/Moroccan%20Traditionnel"} >
            <img
              src={img1}
              alt="Traditionnel"
              width={600}
              height={400}
              className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Moroccan Traditionnel</h3>
              <p className="text-gray-500 dark:text-gray-400">Embrace the ocean breeze</p>
              {/* <button variant="link" className="mt-2">
                View Lifestyle
              </button> */}
            </div>
          </Link>
        </div>
        <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link to={"/lifestyles/detail/GothicStyle"} className="block" prefetch={false}>
            <img
              src={heroS}
              alt="Lifestyle 2"
              width={600}
              height={400}
              className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Gothic Style</h3>
              <p className="text-gray-500 dark:text-gray-400">Sophisticated city living</p>
              {/* <button variant="link" className="mt-2">
                View Lifestyle
              </button> */}
            </div>
          </Link>
        </div>
        <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link to={"/lifestyles/detail/Sport"} >
            <img
              src={sport}
              alt="Lifestyle 3"
              width={600}
              height={400}
              className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Sport</h3>
              <p className="text-gray-500 dark:text-gray-400">Escape to the great outdoors</p>
              {/* <button  className="mt-2">
                View Lifestyle
              </button> */}
            </div>
          </Link>
        </div>
        <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link to={"/lifestyles/detail/Travel"} className="block" prefetch={false}>
            <img
              src={travel}
              alt="Lifestyle 4"
              width={600}
              height={400}
              className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold"> Travel</h3>
              <p className="text-gray-500 dark:text-gray-400">Rustic and cozy living</p>
              {/* <button variant="link" className="mt-2">
                View Lifestyle
              </button> */}
            </div>
          </Link>
        </div>
        <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link to={"/lifestyles/detail/Anime"} className="block" prefetch={false}>
            <img
              src={anime}
              alt="Lifestyle 5"
              width={600}
              height={400}
              className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold"> Anime </h3>
              <p className="text-gray-500 dark:text-gray-400">Streamlined and serene</p>
              {/* <button variant="link" className="mt-2">
                View Lifestyle
              </button> */}
            </div>
          </Link>
        </div>
        <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link to={"/lifestyles/detail/Classy"} className="block" prefetch={false}>
            <img
              src="https://www.apetogentleman.com/wp-content/uploads/2024/05/ape-may-24.jpg"
              alt="Lifestyle 6"
              width={600}
              height={400}
              className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold"> Fancy </h3>
              <p className="text-gray-500 dark:text-gray-400">Blend of styles and cultures</p>
              {/* <button variant="link" className="mt-2">
                View Lifestyle
              </button> */}
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}