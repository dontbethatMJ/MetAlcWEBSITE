import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const serviceData = [
  {
    title: "Gaming (2D/3D Games, Game Design, Game Art, UI, Trailer)",
    image: "/ser1.png",
  },
  {
    title: "XR Development",
    image: "/ser1.png", 
  },
  {
    title: "CGI VFX",
    image: "/ser1.png", 
  },
  {
    title: "3D Product Visualization",
    image: "/ser1.png", 
  },
  {
    title: "Web Development (Frontend)",
    image: "/ser1.png", 
  },
  {
    title: "App Development",
    image: "/ser1.png", 
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      spaceBetween={12} // Gap between cards
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        640: { 
          slidesPerView: 1,
        },
        768: { 
          slidesPerView: 2, 
        },
        1024: { 
          slidesPerView: 3, 
        },
      }}
      className="flex flex-wrap justify-center"
    >
      {serviceData.map((service, index) => (
        <SwiperSlide key={index}>
          <motion.div
            className="flex flex-col items-center cursor-grab" 
            whileHover={{ filter: 'brightness(1.2)' }}
          >
            <div className="relative w-2/3 md:w-full aspect-square overflow-hidden"> 
              <img src={service.image} alt="services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" /> {/* Gradient overlay */}
            </div>
            <div className="w-2/3 md:w-full bg-black text-white flex justify-center items-center text-center p-2 h-8">
              <h3 className="-mt-12 absolute w-[200px]">{service.title}</h3>
            </div>
            <div className="w-2/3 md:w-full bg-transparent flex justify-center items-center text-center p-2 h-12">
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
