'use client';
import React from 'react';
import Slider from "@/components/Slider/page";

const Partners = () => {
  const heroImages = [
    '/wordpress-images/woocommerce-logo.svg',
    '/wordpress-images/gravity-forms-logo.svg',
    '/wordpress-images/Elementor.webp',
    '/wordpress-images/bricks.png',
    '/wordpress-images/divi.png',
  ];

  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-4 w-full  space-y-10 p-5 md:px-28">
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-800 text-center">Proud to be the Go-To WordPress Website</h1>
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-800 text-center pb-10">Development Agency for Our Partners!</h1>

      <div className="h-[250px] w-full p-4 ">
  <Slider
    images={heroImages}
    slidesPerView={4}
    imageSize="w-full h-full "
  />
</div>

    </div>
  );
};

export default Partners;
