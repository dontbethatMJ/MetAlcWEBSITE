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
    image: "/t-avt-1.png",
    name: "Anne Smith",
    // position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    rating: 5,
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    // position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    rating: 3,
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    // position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    rating: 2,
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
                  />
                </div>

                <div className="text-base">{person.name} 
                <div className="ml-1"> 
                  <div className="flex flex-row items-center justify-center">
                  {[...Array(person.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 text-sm"/> 
                  ))}
                  </div>
                </div>
                </div>

                <div className="text-[10px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[150px] relative xl:pl-10"> 
              <div className="mb-2"> 
                <FaQuoteLeft
                  className="text-3xl xl:text-4xl text-white mx-auto md:mx-0"
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