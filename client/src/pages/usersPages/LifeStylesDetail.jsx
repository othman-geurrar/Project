/* eslint-disable no-unused-vars */
// import { FaSpotify } from "react-icons/fa";
const isLoading = false;
import video from "../../assets/lifestyle/v.mp4";
import Musiccards from "../../components/userFlow/musiccards";
import ProductCard from "../../components/userFlow/ProductCard";
import instagram from "../../assets/instagram.png";
import MovingBar from "../../components/userFlow/movingBar";
import { useGetProductsLifeStyleQuery } from "../../redux/services/ProductData";
import { useParams } from "react-router-dom";
import { useGetLifeStyleByNameQuery } from "../../redux/services/LifeStyleData";
import Footer from "../../components/userFlow/Footer";
import IntsaFollow from "../../components/userFlow/IntsaFollow";
import  NavBar  from "../../components/userFlow/NavBar";
const Styles = () => {
  const { LifeStyleName } = useParams();
  const {
    data: ProductsLifeStyles,
    isLoading: ProductsLoading,
    isSuccess: ProductsSuccess,
    isError: ProductsError,
  } = useGetProductsLifeStyleQuery(LifeStyleName);
  const {
    data: LifeStyles,
    isLoading,
    isError,
    isSuccess,
  } = useGetLifeStyleByNameQuery(LifeStyleName);
  if (isSuccess && ProductsSuccess) {
    console.log(ProductsLifeStyles);
    console.log(LifeStyles);
  }

  return (
    <main className="bg-gray-100">
      {isLoading ? (
        <>
          {/* navbar */}
          <div className="h-[60px] bg-black text-white text-center">nav</div>
          {/* skeleton */}
          <section className="flex gap-[30px] p-[20px] h-[90vh]">
            {/* image */}
            <div className="w-[40%] animate-customPulse rounded-md bg-gray-300">
              <div className="backdrop-brightness-90 h-full w-full flex justify-center items-center">
                {/* headline */}
                <div className=" font-lifestylename">
                  <span className="text-[120px] text-white">
                    <i className="fa-solid fa-image"></i>
                  </span>
                </div>
              </div>
            </div>
            {/* decription */}
            <div className=" w-[60%] flex flex-col justify-between ">
              <div className="flex flex-col gap-2 glass rounded-md">
                {/* story */}
                <div className="text-center text-[30px] mt-2">
                  <button
                    type="button"
                    className=" shadow-lg inline-block rounded-full bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    Story
                  </button>
                </div>
                {/* info */}
                <div style={{ boxShadow: "inset -1px 1px 20px 8px #0000000d" }}>
                  <div className="px-[50px] flex flex-col gap-[25px] h-[350px] animate-customPulse  overflow-y-auto py-4 text-[#484848]">
                    <div className="bg-gray-300  rounded-md  h-2"></div>
                    <div className="bg-gray-300 rounded-md  h-2"></div>
                    <div className="bg-gray-300  rounded-md h-2"></div>
                    <div className="bg-gray-300  rounded-md h-2"></div>
                    <div className="bg-gray-300  rounded-md h-2"></div>
                    <div className="bg-gray-300  rounded-md h-2"></div>
                    <div className="bg-gray-300 rounded-md  h-2"></div>
                    <div className="bg-gray-300  rounded-md h-2"></div>
                    <div className="bg-gray-300  rounded-md h-2"></div>
                    <div className="bg-gray-300  rounded-md h-2"></div>
                  </div>
                </div>
                {/* buttons */}
                <div className="text-center mb-2 ">
                  <button
                    type="button"
                    className="group py-2.5 px-5 me-6 w-[155px]  text-sm font-medium text-white focus:outline-none bg-[#1db954] rounded-full border border-gray-200 hover:bg-green-400 hover:text-black focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <span className="mr-2">MusicStyle</span>
                    <i className="fa-brands fa-spotify group-hover:mr-2"></i>
                    <i className="fa-solid fa-arrow-down hidden group-hover:inline"></i>
                  </button>
                  <button
                    type="button"
                    className="group mb-2 py-2.5 px-5 w-[155px] text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <span className="mr-2">Products</span>
                    <i className="fa-solid fa-bag-shopping group-hover:mr-2"></i>
                    <i className="fa-solid fa-arrow-down hidden group-hover:inline"></i>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* navbar */}
          <NavBar />
          {/* hero_section */}
          <section className="flex gap-[30px] p-[20px] pb-0 glass m-4 mb-0 h-[90vh] ">
            {/* image */}
            <div
              className="w-[40%] rounded-md"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${LifeStyles.ImageURL})`,
              }}
            >
              <div className="backdrop-brightness-90 h-full w-full flex justify-center items-center">
                {/* headline */}
                <div className="font-lifestylename">
                  <span className="text-[120px] text-white">
                    {LifeStyles.LifeStyleName}
                  </span>
                </div>
              </div>
            </div>
            {/* decription */}
            <div className=" w-[60%] flex flex-col justify-between ">
              <div className="flex flex-col gap-2 glass rounded-md">
                {/* story */}
                <div className="text-center text-[30px] mt-2">
                  <div
                    className="tooltip  tooltip-right"
                    data-tip="Vintage Story"
                  >
                    <button
                      type="button"
                      className=" shadow-lg inline-block rounded-full bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    >
                      Story
                    </button>
                  </div>
                </div>
                {/* info */}
                <div
                  className="px-[50px]  h-[350px]  overflow-y-auto py-4 text-[#484848]"
                  style={{ boxShadow: "inset -1px 1px 20px 8px #0000000d" }}
                >
                  {LifeStyles.Content.story}
                </div>
                {/* buttons */}
                <div className="text-center mb-2 ">
                  <button
                    type="button"
                    className="group py-2.5 px-5 me-6 w-[155px]  text-sm font-medium text-white focus:outline-none bg-[#1db954] rounded-full border border-gray-200 hover:bg-green-400 hover:text-black focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <a href="#music">
                      <span className="mr-2">MusicStyle</span>
                    </a>
                    <i className="fa-brands fa-spotify group-hover:mr-2"></i>
                    <i className="fa-solid fa-arrow-down hidden group-hover:inline"></i>
                  </button>
                  <button
                    type="button"
                    className="group mb-2 py-2.5 px-5 w-[155px] text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <span className="mr-2">Products</span>
                    <i className="fa-solid fa-bag-shopping group-hover:mr-2"></i>
                    <i className="fa-solid fa-arrow-down hidden group-hover:inline"></i>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </section>
          {/* moving brands */}
          <MovingBar />
          {/* video_section */}
          <section>
            <div className="relative h-[290px] w-[100%] overflow-hidden">
              <video
                className="absolute top-0 left-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                src={video}
                type="video/mp4"
              />
              {/* Optional: Add other content within the div */}
              <div className="relative z-10 h-full w-full  text-white flex flex-col items-center justify-center">
                <div>
                  <span className="text-[30px]">lifestyle title</span>
                </div>
                <div className="px-[30px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta dignissimos qui alias, explicabo, provident ex quae
                  dolorem, voluptas dicta fugiat ipsa repellendus. Tenetur
                  quasi, explicabo odit expedita recusandae harum officia.
                </div>
              </div>
            </div>
          </section>
          {/* moving brands */}
          <MovingBar />
          {/* music-section */}
          {/* music_section */}
          <section className="flex h-[300px]" id="music">
            <div
              className="cursor-pointer h-full w-[50%] bg-[url('https://previews.123rf.com/images/balabolka/balabolka1806/balabolka180600141/103846607-dessin-anim%C3%A9-mignon-doodles-mot-de-musique.jpg')]"
              style={{ backgroundPosition: "center", backgroundSize: "cover " }}
            ></div>
            <div
              className="h-full w-[50%]  text-white bg-[url('https://cdn.wallpapersafari.com/77/57/0CheEm.png')]"
              style={{ backgroundPosition: "center", backgroundSize: "cover " }}
            >
              <div className="w-full p-[40px] h-full backdrop-blur-[2px] flex flex-col justify-center ">
                <div className="mb-2 text-[30px]">for the occasion</div>
                <div className=" ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore earum numquam expedita iusto rerum odio quasi quae
                </div>
              </div>
            </div>
          </section>
          {/* music-cards */}
          <div>
            <Musiccards />
          </div>
          {/* Products_section */}
          <section className="flex h-[300px]">
            <div
              className=" h-full w-[50%]  text-white bg-[url('https://cdn2.mageplaza.com/media/general/OnWj0is.png')]"
              style={{ backgroundPosition: "center", backgroundSize: "cover " }}
            >
              <div className="w-full p-[40px] h-full backdrop-brightness-[0.3] backdrop-blur-[2px] flex flex-col justify-center ">
                <div className="mb-2 text-[30px]">for the occasion</div>
                <div className=" ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore earum numquam expedita iusto rerum odio quasi quae
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer h-full w-[50%] bg-[url('https://www.finplus.co.in/wp-content/uploads/2017/05/Sell-products-online-why-should-I-start-selling-online-1.jpg')]"
              style={{ backgroundPosition: "center", backgroundSize: "cover " }}
            ></div>
          </section>
          {/* Products-cards */}
          <div className=" py-4 px-8 flex justify-center gap-[20px]">
            {ProductsLifeStyles.map((product) => {
              return (
                <>
                  <ProductCard {...product} />
                </>
              );
            })}
          </div>
          {/* Follow US On Insta */}
          <IntsaFollow />
          {/* Footer */}
          <Footer />
        </>
      )}
    </main>
  );
};

export default Styles;
