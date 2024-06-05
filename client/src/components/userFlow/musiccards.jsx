/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import audio from "../../assets/lifestyle/starboy.mp3";
const Musiccards = ({ music }) => {

   const [isPlaying, setIsPlaying] = useState(false);
   const audioRef = useRef(null);

   const togglePlayPause = () => {
     const audioElements = document.querySelectorAll("audio");

     audioElements.forEach((audio) => {
       if (audio !== audioRef.current) {
         audio.pause();
         audio.currentTime = 0; // Reset to the beginning if needed
         audio.nextElementSibling.classList.remove("playing"); // Remove play state from other buttons
       }
     });

     if (isPlaying) {
       audioRef.current.pause();
     } else {
       audioRef.current.play();
     }
     setIsPlaying(!isPlaying);
     audioRef.current.nextElementSibling.classList.toggle("playing"); // Toggle play state for the clicked button
   };
 
  return (
    <>
      <div className=" py-4 px-8 flex  gap-[20px]">
        {music.map((item) => {
          return (
            <>
              {/* card_music */}
              <div
                style={{ boxShadow: "rgb(0 0 0 / 26%) 0px 1px 4px" }}
                className="w-[550px] flex justify-start items-center p-8 relative max-h-40 shadow-sm rounded-md"
              >
                <div className="avatar">
                  <div className="w-[8rem] rounded-full">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
                <p className="pl-9 text-2xl font-semibold w-[200px]">
                  {item.title}
                  <br />
                  <span className="text-lg font-normal">
                    {item.description}
                  </span>
                </p>
                <span
                  onClick={togglePlayPause}
                  className="clear-left rounded-full bg-[#eff0f9] p-4 cursor-pointer group [&_*]:transition-all [&_*]:duration-150 [&_*]:ease-in"
                >
                  <audio ref={audioRef} src={audio} />
                  <span className="px-3 py-3 block bg-white rounded-full shadow-md group-hover:bg-[#1db954]">
                    {isPlaying ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:fill-white group-hover:stroke-white"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#1db954"
                        fill="#1db954"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="6" y="5" width="4" height="14" rx="1" />
                        <rect x="14" y="5" width="4" height="14" rx="1" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:fill-white group-hover:stroke-white"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#1db954"
                        fill="#1db954"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 4v16l13 -8z" />
                      </svg>
                    )}
                  </span>
                </span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Musiccards;