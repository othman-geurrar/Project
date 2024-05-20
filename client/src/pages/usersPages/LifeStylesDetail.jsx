import { Footer, NavBaar } from "../../components";

// import { FaSpotify } from "react-icons/fa";
const isLoading = false;
// import video from "./stylesvideo.mp4";
const LifeStyleDetail = () => {
  return (
    <main>
        {/* navbar */}
        <NavBaar />
      {isLoading ? (
        <>
          {/* navbar */}
         
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
                    <div className="bg-gray-300 rounded-md  h-2"></div>{" "}
                    <div className="bg-gray-300  rounded-md h-2"></div>
                    <div className="bg-gray-300  rounded-md h-2"></div>
                    <div className="bg-gray-300  rounded-md h-2"></div>{" "}
                    <div className="bg-gray-300  rounded-md h-2"></div>
                    <div className="bg-gray-300 rounded-md  h-2"></div>
                    <div className="bg-gray-300  rounded-md h-2"></div>{" "}
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
       
          
          {/* hero_section */}
          <section className="flex gap-[30px] p-[20px] h-[90vh]">
            {/* image */}
            <div
              className="w-[40%] rounded-md bg-[url('https://www.standout.co.uk/blog/wp-content/uploads/2022/06/AdobeStock_295075964-scaled.jpeg')]"
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="backdrop-brightness-90 h-full w-full flex justify-center items-center">
                {/* headline */}
                <div className=" font-lifestylename">
                  <span className="text-[120px] text-white">Vintage</span>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore praesentium quod exercitationem dolorum ducimus omnis?
                  Maxime nostrum at qui, saepe excepturi voluptatem cupiditate
                  distinctio consequuntur tempore perspiciatis, quidem, omnis
                  ducimus? Lorem Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Labore praesentium quod exercitationem
                  dolorum ducimus omnis? Maxime nostrum at qui, saepe excepturi
                  voluptatem cupiditate distinctio consequuntur tempore
                  perspiciatis, quidem, omnis ducimus? LoremLorem ipsum dolor
                  sit amet consectetur adipisicing elit. Labore praesentium quod
                  exercitationem dolorum ducimus omnis? Maxime nostrum at qui,
                  saepe excepturi voluptatem cupiditate distinctio consequuntur
                  tempore perspiciatis, quidem, omnis ducimus? LoremLorem ipsum
                  dolor sit amet consectetur adipisicing elit. Labore
                  praesentium quod exercitationem dolorum ducimus omnis? Maxime
                  nostrum at qui, saepe excepturi voluptatem cupiditate
                  distinctio consequuntur tempore perspiciatis, quidem, omnis
                  ducimus? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Labore praesentium quod exercitationem dolorum ducimus
                  omnis? Maxime nostrum at qui, saepe excepturi voluptatem
                  cupiditate distinctio consequuntur tempore perspiciatis,
                  quidem, omnis ducimus?
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
          
          {/* <section>
            <div className="relative h-[200px] w-[100%] overflow-hidden">
              <video
                className="absolute top-0 left-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                src={video}
                type="video/mp4"
              />
              
              <div className="relative z-10 h-full w-full backdrop-brightness-[0.3] text-white flex flex-col items-center justify-center">
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
          </section> */}
        </>
      )}
      <Footer />
    </main>
  );
};

export default LifeStyleDetail;