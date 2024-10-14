import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { RxArrowTopRight, RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket } from 'react-icons/rx';

const serviceData = [
  {
    title: "Branding",
    link: "https://example.com/branding",  // Link
    image: "/ser1.png",  // Image path
  },
  {
    title: "Design",
    link: "https://example.com/design",  // Link
    image: "/ser1.png",  // Image path
  },
  {
    title: "Development",
    link: "https://example.com/development",  // Link
    image: "/ser1.png",  // Image path
  },
  {
    title: "Copywriting",
    link: "https://example.com/copywriting",  // Link
    image: "/ser1.png",  // Image path
  },
  {
    title: "SEO",
    link: "https://example.com/seo",  // Link
    image: "/ser1.png",  // Image path
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      navigation={false}  // Disable navigation arrows
      pagination={{
        clickable: true,
        type: 'bullets',
      }}
      modules={[Pagination]}  // Remove Navigation from modules
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <a href={item.link} target="_blank" rel="noopener noreferrer"> 
            <div className="bg-[#6fc3ce] text-[#16232b] h-max rounded-lg px-0 py-0 flex flex-col group cursor-pointer hover:brightness-110 transition-all duration-300">
              {/* image */}
              <div className="h-[40%] overflow-hidden rounded-t-lg">
                <img src={item.image} alt={item.title} className="w-full h-[140px] md:h-full object-cover" /> 
              </div>

              {/* title and arrow container */}
              <div className="flex flex-col justify-between h-[60%] m-4 text-lg">
                <div className="mb-2">{item.title}</div> 

                {/* arrow */}
                <div className="flex items-center md:mt-12 text-3xl">
                  <RxArrowTopRight
                    className="group-hover:rotate-45 transition-all duration-300"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;