'use client';
import React from 'react';
import Slider from "@/components/Slider/page";

const Hero = () => {
  const heroImages = [
    '/wordpress-images/jamshaid.jpg',
    '/wordpress-images/islam.jpg',
    '/wordpress-images/zernab.jpeg',
    '/wordpress-images/noraiz.png',
    '/wordpress-images/iq.png',
    '/wordpress-images/ayesha.jpg',
  ];

  return (
    <div className="flex flex-col md:flex-row container mx-auto pt-20 pb-20 w-full  space-y-10 md:px-28 p-5">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 order-2 md:order-1">
        <h1 className="text-4xl text-bold font-bold mb-4">Need WordPress Website Design? Let Our Experts Help You!</h1>
        <p className="mb-6 text-lm">
          Don’t just settle for ordinary – Go for extraordinary. Hire the best WordPress website designers and
          get exceptional results that satisfy all your requirements!
        </p>
        <button
          type="button"
          className="py-2.5 px-7 mb-5 text-lg text-white bg-black rounded-sm hover:bg-[#ffb299] hover:text-white font-bold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          Book A CONSULTANT (FREE)
        </button>
        <div className="flex items-center space-x-4 text-lg text-gray-950">
          <span>Free estimate</span>
          <span className="w-1 h-1 bg-black rounded-full inline-block"></span>
          <span>24/7 hours available</span>
          <span className="w-1 h-1 bg-black rounded-full inline-block"></span>
          <span>100% risk-free</span>
        </div>
      </div>

{/* Slider Section */}
<div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
  <div className="w-full h-full relative overflow-hidden rounded-tl-[60px] rounded-br-[60px] flex items-center justify-center">
    <Slider images={heroImages} imageSize="w-[620px] h-[800px]" />
  </div>
</div>


    </div>
  );
};

export default Hero;
