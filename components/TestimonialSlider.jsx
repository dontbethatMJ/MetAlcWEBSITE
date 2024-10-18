import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/ex.jpg",
    name: "Tapas Badal",
    // position: "kuch to h",
    message:
      "Our new website is not only beautiful but also user-friendly—thanks to their talented frontend developers!",
    rating: 5,
  },
  {
    image: "/ex.jpg",
    name: "Shakti",
    // position: "kuch to h",
    message:
      "The CGI VFX team brought our project to life with stunning visuals; exceeded our expectations!",
    rating: 4,
  },
  {
    image: "/ex.jpg",
    name: "Aditya",
    // position: "kuch to h",
    message:
      "Their expertise in gaming and XR dev transformed our vision into reality—truly impressive!",
    rating: 5,
  },
  {
    image: "/ex.jpg",
    name: "Dhruv",
    // position: "kuch to h",
    message:
      "The app they developed for us is a game changer—smooth, functional, and engaging!",
    rating: 4,
  },
  {
    image: "/ex.jpg",
    name: "Vishal",
    // position: "kuch to h",
    message:
      "Exceptional 3D product visualization that really showcased our brand in a fresh way!",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[300px]" 
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-4 h-full px-8"> 
            <div className="w-full max-w-[200px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0"> 
              <div className="flex flex-col justify-center text-center">
                <div className="mb-1 mx-auto"> 
                  <Image
                    src={person.image}
                    width={80} 
                    height={80} 
                    alt={person.name}
                    className="rounded-full"
                  />
                </div>

                <div className="text-base">{person.name} 
                <div className="text-[10px] uppercase font-extralight tracking-widest">{person.position}</div>
                <div className="ml-1"> 
                  <div className="flex flex-row items-center justify-center">
                  {[...Array(person.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 text-sm"/> 
                  ))}
                  </div>
                </div>
                </div>

              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[150px] relative xl:pl-10"> 
              <div className="mb-2"> 
                <FaQuoteLeft
                  className="text-3xl xl:text-4xl text-accent mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              <div className="text-sm xl:text-base text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
