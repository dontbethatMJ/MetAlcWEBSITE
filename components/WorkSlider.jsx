import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Game Teaser",
          path: "/thumb1.jpg",
          link: "https://youtu.be/pe23yRk7wkU",
        },
        {
          title: "Sci-Fi Game UI",
          path: "/thumb2.jpg",
          link: "",
        },
        {
          title: "Speedball 3d Game",
          path: "/thumb3.jpg",
          link: "https://metaversealchemists.itch.io/speedy-ball-balance",
        },
        {
          title: "Can 3D visualisation & animation",
          path: "/thumb4.jpg",
          link: "https://www.artstation.com/artwork/AZoXkq",
        },
      ],
    },
    {
      images: [
        {
          title: "Fantasy environment (with Hogwartz castle)",
          path: "/thumb4.jpg",
          link: "",
        },
        {
          title: "Japanese shrine",
          path: "/thumb1.jpg",
          link: "https://www.artstation.com/artwork/0laZdE",
        },
        {
          title: "Audio interface visualisation (AudioArray)",
          path: "/thumb2.jpg",
          link: "https://www.artstation.com/artwork/zxzWxq",
        },
        {
          title: "360 vr viewer app",
          path: "/thumb3.jpg",
          link: "https://play.google.com/store/apps/details?id=com.viewcon360.ViewCon360",
        },
      ],
    },
    {
      images: [
        {
          title: "Cognify",
          path: "/cognify.png",
          link: "https://maybetarun.github.io/CognifyWebsite.github.io/",
        },
        {
          title: "",
          path: "/thumb1.jpg",
          link: "",
        },
        {
          title: "Aaargh!!",
          path: "/aaargh.gif",
          link: "https://aaargh.vercel.app",
        },
        {
          title: "",
          path: "/thumb3.jpg",
          link: "",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    className="transition-all duration-300 group-hover:blur-[2px]"
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-black opacity-10 group-hover:opacity-25 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100 uppercase max-w-64 text-center font-extrabold">{image.title}</div>
                      {/* title part 2 */}
                      {/* <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div> */}
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;