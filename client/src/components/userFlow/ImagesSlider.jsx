"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/ImagesSlider";

export default function ImagesSliderDemo() {
  const images = [
    "https://www.apetogentleman.com/wp-content/uploads/2024/05/ape-may-24.jpg",
    "https://osaythelabel.com/cdn/shop/files/000015200010_1800x.jpg?v=1697136305",
    "https://cdn.pixabay.com/photo/2020/07/02/18/41/dawn-5363905_1280.jpg",
  ];

  return (
    <ImagesSlider className="h-[45rem]" images={images}>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Live Your Life  <br /> With Style
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Discover More →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
