import React from "react";
import instagram from "../../assets/instagram.png";

const IntsaFollow = () => {
  return (
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
      {/* <div className="text-center md:text-[16px] text-[12px] md:mb-16 mb-5 text-[#8A8A8A] md:px-[500px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro
          error blanditiis suscipit repudiandae laudantium id laboriosam,
        </p>
      </div> */}
      <div className=" ">
        <img src={instagram} />
      </div>
    </div>
  );
};

export default IntsaFollow;
