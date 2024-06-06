/* eslint-disable no-unused-vars */
// import { FaSpotify } from "react-icons/fa";
const isLoading = false;
import video from "../../assets/lifestyle/v.mp4";
import Musiccards from "../../components/userFlow/musiccards";
import ProductCard from "../../components/userFlow/ProductCard";
import instagram from "../../assets/instagram.png";
import MovingBar from "../../components/userFlow/movingBar";
import { useGetProductsLifeStyleQuery } from "../../redux/services/ProductData";
import { Button, Modal } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { useGetLifeStyleByNameQuery } from "../../redux/services/LifeStyleData";
import Footer from "../../components/userFlow/Footer";
import IntsaFollow from "../../components/userFlow/IntsaFollow";
import NavBar from "../../components/userFlow/NavBar";
import footergothic from "../../assets/lifestyle/footergothic.jpg";
import Goth from "../../assets/lifestyle/Goth.jpeg";
import GothicStory from "../../assets/lifestyle/GothicStory.jpeg";
import musicGothic from "../../assets/lifestyle/musicGothic.jpeg";
import { useState } from "react";
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
  //scroll to music
  if (isSuccess && ProductsSuccess) {
    console.log(ProductsLifeStyles);
    console.log(LifeStyles);
  }
  const handleMusicButtonClick = () => {
    const musicSection = document.getElementById("musics");
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleProductButtonClick = () => {
    const productSection = document.getElementById("products");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Story Style Modal
  const [openStoryModal, setOpenStoryModal] = useState(false);
  // Music Style Modal
  const [openMusicModal, setOpenMusicModal] = useState(false);
  // Products Style Modal
  const [openProductModal, setOpenProductsModal] = useState(false);
  // musicdescription
  const [musicDescription, setMusicDescription] = useState(true);
  return (
    <main className="bg-gray-100">
      {isLoading ? (
        <>
          {/* navbar */}
          <NavBar />
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
          <section
            className="w-full h-[590px] bg-cover bg-center"
            style={{ backgroundImage: `url(${LifeStyles.ImageURL})` }}
          ></section>
          {/* moving brands */}
          <MovingBar />
          {/* video_section */}
          <section>
            <div className="relative mb-2 h-[250px] w-[100%] overflow-hidden">
              <video
                className="absolute top-0 left-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                src={LifeStyles.Video}
                type="video/mp4"
              />
              <div className="relative z-10 h-full w-full  text-white flex flex-col items-center justify-center">
                <div>
                  <span className="text-[50px] font-gothical">
                    lifestyle title
                  </span>
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
          <section className="py-[30px] pb-[80px]  shadow-custom-inset">
            <div className="text-center text-[30px] md:text-[46px]  text-[#484848]">
              InfoStyle
            </div>
            <div className="text-center md:text-[16px] text-[12px] md:mb-[20px] text-[#8A8A8A] md:px-[500px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                porro error blanditiis suscipit repudiandae laudantium id
              </p>
            </div>
            <div className="grid grid-cols-6 grid-rows-5 gap-4 ">
              <div className="col-span-2 row-span-5 h-[600px] ">
                <img
                  className="h-full w-full object-cover object-center"
                  src={LifeStyles.Image1}
                  alt=""
                />
              </div>
              {/* story */}
              <div
                onClick={() => setOpenStoryModal(true)}
                className="col-span-2 cursor-pointer row-span-5 col-start-3 bg-cover bg-center text-white relative"
                style={{ backgroundImage: `url(${LifeStyles.ImageStory})` }}
              >
                <div
                  className={`relative text-[60px] font-${LifeStyles.LifeStyleName}  absolute inset-0 h-full w-full flex items-center justify-center opacity-0 transition-opacity duration-300 opacity-100 text-white backdrop-blur-[2px]`}
                  style={{
                    backgroundColor: "rgb(0 0 0 / 68%)",
                  }}
                >
                  <i className="text-[30px] absolute top-2 right-2 fa-solid fa-circle-info"></i>
                  StoryStyle
                </div>
              </div>
              {/* modale */}
              <Modal
                show={openStoryModal}
                onClose={() => setOpenStoryModal(false)}
              >
                <Modal.Header>
                  {LifeStyles.LifeStyleName}Style Story
                </Modal.Header>
                <Modal.Body>
                  <div className="space-y-6 max-h-[500px] overflow-auto">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {LifeStyles.Content.story}
                    </p>
                    {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The Abbey Church of Saint-Denis, located near Paris, is
                    indeed considered a pivotal point in the development of
                    Gothic architecture. Abbot Suger, who oversaw the
                    reconstruction of the church in the 12th century,
                    implemented several architectural innovations that would
                    become characteristic of the Gothic style.
                  </p> */}
                  </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
              {/* modale */}
              {/* music */}
              <div
                onClick={() => setOpenMusicModal(true)}
                className="col-span-2 cursor-pointer row-span-5 col-start-5 bg-cover bg-center relative text-white"
                style={{ backgroundImage: `url(${LifeStyles.ImageMusic})` }}
              >
                <div
                  className={`relative text-[60px] absolute font-${LifeStyles.LifeStyleName} inset-0 h-full w-full flex items-center justify-center opacity-0 transition-opacity duration-300 opacity-100 text-white backdrop-blur-[2px]`}
                  style={{
                    backgroundColor: "rgb(0 0 0 / 68%)",
                  }}
                >
                  <i className="text-[30px] absolute top-2 right-2 fa-solid fa-circle-info"></i>
                  MusicStyle
                </div>
              </div>
              {/* modale */}
              <Modal
                show={openMusicModal}
                onClose={() => {
                  setOpenMusicModal(false);
                  setMusicDescription(true);
                }}
              >
                <Modal.Header>
                  {LifeStyles.LifeStyleName}Style Music
                </Modal.Header>
                {musicDescription ? (
                  <Modal.Body>
                    <div className="space-y-6 max-h-[500px] overflow-auto">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {LifeStyles.Content.musicDescription}
                      </p>
                      <Modal.Footer className="flex justify-center">
                        <button
                          onClick={() => setMusicDescription(false)}
                          type="button"
                          className="group py-2.5 px-5  text-sm font-medium text-white focus:outline-none bg-[#1db954] rounded-full border border-gray-200 hover:bg-green-400 hover:text-black focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          <span className="mr-2">Explore Gothic Sounds</span>
                          <i className="fa-brands fa-spotify "></i>
                        </button>
                      </Modal.Footer>
                    </div>
                  </Modal.Body>
                ) : (
                  <Modal.Body>
                    <div className="space-y-6 max-h-[500px] overflow-auto">
                      <button
                        onClick={() => setMusicDescription(true)}
                        type="button"
                        className="sticky left-0 top-0 z-10 flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
                      >
                        <svg
                          className="w-5 h-5 rtl:rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                          />
                        </svg>
                        <span>Go back</span>
                      </button>
                      <div>
                        <Musiccards music={LifeStyles.Content.music} />
                      </div>
                      <Modal.Footer className="flex justify-center">
                        <button
                          onClick={() => setMusicDescription(false)}
                          type="button"
                          className=" group py-2.5 px-5  text-sm font-medium text-white focus:outline-none bg-[#1db954] rounded-full border border-gray-200 hover:bg-green-400 hover:text-black focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          <a
                            href="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=7bd2104482a642c5"
                            target="blank"
                          >
                            <span className="mr-2">Checkout our playlist</span>
                          </a>
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                        </button>
                      </Modal.Footer>
                    </div>
                  </Modal.Body>
                )}
              </Modal>
              {/* modale */}
            </div>
          </section>
          <div className="  text-center text-[30px] md:text-[46px] my-3 font-followus text-[#484848]">
            ProductStyle
          </div>
          <div
            className={` text-center md:text-[16px] text-[12px] md:mb-[50px] text-[#8A8A8A] md:px-[500px]`}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro
              error blanditiis suscipit repudiandae laudantium id laboriosam,
            </p>
          </div>
          {/* Products-cards */}
          <div className="pb-8 px-8 flex gap-[20px] scrollbar-hidden overflow-auto ">
            {ProductsLifeStyles?.map((product) => {
              return (
                <>
                  <ProductCard {...product} />
                </>
              );
            })}
          </div>
          {/* Follow US On Insta */}
          {/* <IntsaFollow /> */}
          {/* Footer */}
          <Footer />
        </>
      )}
    </main>
  );
};

export default Styles;
