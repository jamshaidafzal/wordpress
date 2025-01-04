'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';

interface SliderProps {
  images: string[];
  slidesPerView?: number;
  imageSize?: string; // Add a prop to define custom image size
}

const Slider: React.FC<SliderProps> = ({ images, slidesPerView = 1, imageSize = 'w-[200px] h-[200px]' }) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000, // Delay in milliseconds (3 seconds)
        disableOnInteraction: false, // Keep autoplay running even after interaction
      }}
      modules={[Autoplay, Pagination]}
      className="custom-slider"
    >
      {images.map((image: string, index: number) => (
        <SwiperSlide key={index}>
          <div className="relative flex items-center justify-center">
            <img
              src={image}
              alt={`Slide ${index}`}
              className={`${imageSize} object-cover  transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
