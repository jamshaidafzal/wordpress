'use client';
import React from 'react';
import Slider from "@/components/Slider/page";

const Partners = () => {
  const heroImages = [
    '/partners/woo.png',
    '/partners/divi.png',
    '/partners/GRAVITY.png',
    '/partners/bricks.png',
    '/partners/bricks.png',
    '/partners/woo.png',

  ];

  return (
    <div className="flex flex-wrap justify-center w-full p-5 md:px-28">
    {/* Responsive H1 Headings */}
    <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-800 text-center">
      Proud to be the Go-To WordPress Website
    </h1>
    <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-800 text-center">
      Development Agency for Our Partners!
    </h1>
  
    {/* Responsive Slider */}
    <div className="h-[250px] w-full p-4">
      <Slider
        images={heroImages}
        slidesPerView={window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : 4} // Dynamically set slides per view
        imageSize="w-full h-full"
      />
    </div>
  </div>
  
  );
};

export default Partners;
