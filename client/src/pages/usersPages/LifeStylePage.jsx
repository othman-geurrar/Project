/* eslint-disable no-unused-vars */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import instagram from "../../assets/instagram.png";
import heroS from "../../assets/heroS.jpeg";
import { useGetAllLifeStyleQuery } from "../../redux/services/LifeStyleData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBaar } from "../../components";

const LifeStyleFront = () => {
  //  getLifeStyles Query
  const {
    data: LifeStyles,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useGetAllLifeStyleQuery();
  const [Toolbutton, setToolbutton] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [LifeStylesPerPage, setLifeStylesPerPage] = useState(3);
  const pageNumber = [];
  const indexOfLastorder = currentPage * LifeStylesPerPage;
  const indexOfFirstorder = indexOfLastorder - LifeStylesPerPage;
  const currentLifeStyles = LifeStyles?.LifeStyle.slice(
    indexOfFirstorder,
    indexOfLastorder
  );
  for (
    let i = 1;
    i <= Math.ceil(LifeStyles?.LifeStyle.length / LifeStylesPerPage);
    i++
  ) {
    pageNumber.push(i);
  }
  return (
    <>
      <div className="">
        {/* Nav_Bar */}
        <NavBaar />
        {/* Swiper_Hero_Section */}
        <div
          className="mySwiper md:h-[72vh] h-[30vh] w-full  "
          style={{
            backgroundImage: `url(https://assets.vogue.com/photos/5f626211febc708fb8fccb96/16:9/w_1920,h_1080,c_limit/FashionPlitics_v3-1x1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="w-full text-white font-lifestylename h-full backdrop-brightness-[0.5] flex flex-col justify-center items-center">
            <div className="md:text-[90px] text-[50px]">
              <span className="mr-3">Lifes Possibilities</span>
              <span className="loading loading-dots md:loading-lg loading-md"></span>
            </div>
            {/* button */}
            <div className="text-center">
              <button
                type="button"
                className="shadow-black shadow-lg md:hover:scale-110 transition duration-700 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <span className="mr-2 font-followus">Dicover</span>
                <i className="fa-solid fa-arrow-down"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Styles_Swiper */}
        <div
          style={{ boxShadow: "rgb(0 0 0 / 6%) 0px 0px 20px 0px inset" }}
          className="md:pb-[30px]"
        >
          <div className="text-center text-[30px] py-[10px] md:text-[46px] md:pt-[20px]  font-followus text-[#484848]">
            Trending Lifestyles
          </div>
          <div></div>
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={false}
            speed={1500} // Adjust the speed value according to your preference
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            modules={[Pagination, Navigation, Autoplay]}
            className=" md:p-[20px] md:pb-[50px] p-[10px] "
          >
            {LifeStyles?.LifeStyle.filter((item) => item.trending).map(
              (item) => {
                return (
                  <>
                    <SwiperSlide className="flex md:flex-row flex-col gap-[20px] md:justify-center md:h-[360px]  ">
                      <div className="  p-[20px] md:w-[50%] glass">
                        <div className="md:text-[60px] text-[40px] font-lifestylename">
                          {item.LifeStyleName} Style
                        </div>
                        <div className="mb-3 md:text-[16px] text-[12px] text-[#8A8A8A]">
                          <p>{item.Content.description}</p>
                        </div>
                        <div className="text-center md:text-start">
                          <Link to={`/lifestyles/detail/${item.LifeStyleName}`}>
                            <button
                              type="button"
                              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                              View More
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className=" md:w-[50%]">
                        <img
                          className=" h-full w-full object-cover object-center"
                          src={item.ImageURL}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  </>
                );
              }
            )}
          </Swiper>
        </div>
        {/* lifeStyles Cards */}
        <section className="pt-[50px] ">
          {/* decription */}
          <div className="text-center text-[30px] md:text-[46px] mb-3 font-followus text-[#484848]">
            Our Lifestyles
          </div>
          <div className="text-center md:text-[16px] text-[12px] md:mb-[50px] text-[#8A8A8A] md:px-[500px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro
              error blanditiis suscipit repudiandae laudantium id laboriosam,
            </p>
          </div>

          <div>
            <>
              {/* cards */}
              {/* meduim-cards */}
              <div className="hidden md:block">
                {/* <form
                    className="flex items-center max-w-sm mx-auto  "
                    style={{ marginBottom: "50px" }}
                  >
                    <div className="relative w-full mr-2">
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border p-2 focus-visible::border-none text-gray-900 text-sm rounded-lg block w-full pl-10 py-2.5"
                        placeholder="Search Lifestyle Name..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <span>Search</span>
                    </button>
                  </form> */}
                <div
                  className=" md:flex md:flex-wrap justify-center mb-[50px] md:gap-[50px] gap-[15px] md:py-0  md:w-[70%] md:mx-auto"
                  // style={{ marginBottom: "50px" }}
                >
                  {isLoading && (
                    <>
                      <div>isLoading...</div>
                    </>
                  )}
                  {currentLifeStyles?.map((item) => {
                    return (
                      <>
                        <Link to={`/lifestyles/detail/${item.LifeStyleName}`}>
                          <div
                            className="cursor-pointer rounded-xl h-[360px] w-[240px] transition duration-500 hover:scale-110  bg-cover bg-center"
                            style={{
                              boxShadow: "-7px 6px 13px 0px #000",
                              backgroundImage: `url(${item.ImageURL})`,
                            }}
                          >
                            <div className="h-full w-full  rounded-xl  transition duration-500 backdrop-brightness-[0.6] flex flex-col pt-[50px] font-lifestylename text-white ">
                              <div className=" text-center text-[40px]">
                                {item.LifeStyleName}
                              </div>
                              <div className="px-[10px] text-[20px] text-center ">
                                {item.Content.description}
                              </div>
                              <div className="text-center mt-[10px] ">
                                <button
                                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-white text-black shadow-xl  shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
                                  type="button"
                                >
                                  1992
                                </button>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </Link>
                      </>
                    );
                  })}
                </div>
                {/* Pagination */}
                {LifeStyles?.LifeStyle.length > 3 && (
                  <div className="text-center mb-5">
                    {Toolbutton && (
                      <button
                        type="button"
                        onClick={() => {
                          setToolbutton(false);
                          setLifeStylesPerPage(LifeStyles?.LifeStyle.length);
                        }}
                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        View More
                      </button>
                    )}
                    {!Toolbutton && (
                      <button
                        type="button"
                        onClick={() => {
                          setToolbutton(true);
                          setLifeStylesPerPage(3);
                        }}
                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        View Less
                      </button>
                    )}
                  </div>
                )}
              </div>
              {/* small-cards */}
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={120}
                className="mySwiper text-center mb-[10px] md:hidden px-[100px] pt-6 pb-8"
              >
                <SwiperSlide
                  className="md:rounded-xl rounded-md h-[360px] w-[240px]  bg-cover bg-center bg-[url('https://i.pinimg.com/564x/16/cc/c7/16ccc763b0a8800cbcd4003a9af23159.jpg')]"
                  style={{
                    boxShadow: "rgb(0 0 0 / 42%) -19px 7px 20px 0px",
                  }}
                >
                  <div className="h-full w-full  rounded-xl  transition duration-500 md:justify-start justify-center backdrop-brightness-[0.6] flex flex-col md:pt-[50px]  font-lifestylename text-white ">
                    <div className=" text-center text-[40px]">Metal</div>
                    <div className="px-[10px] md:text-[20px] text-center ">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptas velit nihil obcaecati illum quos aspernatur earum
                    </div>
                    <div className="text-center mt-[10px] ">
                      {" "}
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-white text-black shadow-xl  shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
                        type="button"
                      >
                        1992
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="rounded-xl h-[360px] w-[240px]  bg-cover bg-center bg-[url('https://i.pinimg.com/originals/84/89/c5/8489c5f4cdb27edd1cfa6aded008f639.jpg')]"
                  style={{
                    boxShadow: "rgb(0 0 0 / 42%) -19px 7px 20px 0px",
                  }}
                >
                  <div className="h-full w-full  rounded-xl  transition duration-500 md:justify-start justify-center backdrop-brightness-[0.6] flex flex-col md:pt-[50px]  font-lifestylename text-white ">
                    <div className=" text-center text-[40px]">Hipster</div>
                    <div className="px-[10px] text-[20px] text-center ">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptas velit nihil obcaecati illum quos aspernatur earum
                    </div>
                    <div className="text-center mt-[10px] ">
                      {" "}
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-white text-black shadow-xl  shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
                        type="button"
                      >
                        1992
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="md:rounded-xl rounded-md h-[360px] w-[240px]  bg-cover bg-center bg-[url('https://img.freepik.com/photos-premium/fete-hippie_808092-6647.jpg?w=360')]"
                  style={{
                    boxShadow: "rgb(0 0 0 / 42%) -19px 7px 20px 0px",
                  }}
                >
                  <div className="h-full w-full  rounded-xl  transition duration-500 md:justify-start justify-center backdrop-brightness-[0.6] flex flex-col md:pt-[50px]  font-lifestylename text-white ">
                    <div className=" text-center text-[40px]">Hippy</div>
                    <div className="px-[10px] text-[20px] text-center ">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptas velit nihil obcaecati illum quos aspernatur earum
                    </div>
                    <div className="text-center mt-[10px] ">
                      {" "}
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-white text-black shadow-xl  shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
                        type="button"
                      >
                        1992
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="rounded-xl h-[360px] w-[240px]  bg-cover bg-top bg-[url('https://i.pinimg.com/736x/0d/d3/f4/0dd3f42139c0a48c900fc8b9f87fbafa.jpg')]"
                  style={{
                    boxShadow: "rgb(0 0 0 / 42%) -19px 7px 20px 0px",
                  }}
                >
                  <div className="h-full w-full  rounded-xl  transition duration-500 md:justify-start justify-center backdrop-brightness-[0.6] flex flex-col md:pt-[50px]  font-lifestylename text-white ">
                    <div className=" text-center text-[40px]">Casual</div>
                    <div className="px-[10px] text-[20px] text-center ">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptas velit nihil obcaecati illum quos aspernatur earum
                    </div>
                    <div className="text-center mt-[10px] ">
                      {" "}
                      <button
                        className="  align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6   shadow-xl bg-white text-black shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
                        type="button"
                      >
                        1992
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </section>
        {/* Follow US On Insta */}
        <div
          className="md:py-[50px] pb-0"
          style={{ boxShadow: "rgb(0 0 0 / 6%) 0px 0px 20px 0px inset" }}
        >
          <div
            className=" text-center md:text-[46px] mb-3 py-[10px] text-[30px] font-followus text-[#484848]"
            style={{ boxShadow: "inset -1px 1px 20px 8px #0000000d" }}
          >
            <span className="hidden md:inline mr-5">Follow Us</span>
            <i className="fa-brands fa-instagram mr-5"></i>
            <i className="fa-brands fa-facebook mr-5"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="text-center md:text-[16px] text-[12px] md:mb-16 mb-5 text-[#8A8A8A] md:px-[500px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro
              error blanditiis suscipit repudiandae laudantium id laboriosam,
            </p>
          </div>
          <div className=" ">
            <img src={instagram} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeStyleFront;