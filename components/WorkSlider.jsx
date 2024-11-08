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
          title: "Japanese shrine",
          path: "/shrine.png",
          link: "https://www.artstation.com/artwork/0laZdE",
        },
        {
          title: "Sci-Fi Game UI",
          path: "/scifi.png",
          link: "https://youtu.be/9l_eGlLGvjc",
        },
        {
          title: "Audio interface visualisation (AudioArray)",
          path: "/aiv.png",
          link: "https://www.artstation.com/artwork/zxzWxq",
        },
        {
          title: "360 vr viewer app",
          path: "/pocketview.png",
          link: "https://play.google.com/store/apps/details?id=com.viewcon360.ViewCon360",
        },
      ],
    },
    {
      images: [
        {
          title: "Can 3D visualisation & animation",
          path: "/can.png",
          link: "https://www.artstation.com/artwork/AZoXkq",
        },
        {
          title: "Beginner FPV Controller Prototype",
          path: "/bfcp.png",
          link: "https://metaversealchemists.itch.io/fpvunity1",
        },
        {
          title: "Blender Basic Logo Animation",
          path: "/bbla.gif",
          link: "https://youtu.be/n3ax40nFc20",
        },
        {
          title: "Third Person Controller Prototype",
          path: "/tpc.png",
          link: "https://metaversealchemists.itch.io/tpvunity1",
        },
      ],
    },
    {
      images: [
        {
          title: "Portfolio (Tarun)",
          path: "/portfoliotarun.png",
          link: "https://maybetarun.in",
        },
        {
          title: "Portfolio (Dakshi)",
          path: "/portfolioduck.png",
          link: "https://dakshie.xyz",
        },
        {
          title: "WebGame with ReactJs (Aaargh!!)",
          path: "/aaargh.gif",
          link: "https://aaargh.vercel.app",
        },
        {
          title: "Landing Page (RetroUI)",
          path: "/retroui.png",
          link: "http://retroui.io",
        },
      ],
    },
    {
      images: [
        {
          title: "Landing Page (Sassy Livid)",
          path: "/sassylivid.png",
          link: "https://sassy-livid.vercel.app",
        },
        {
          title: "Android App with Kotlin (Cognify)",
          path: "/cognify.png",
          link: "https://maybetarun.github.io/CognifyWebsite.github.io/",
        },
        {
          title: "More Soon",
          path: "/ex2.png",
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
                    className="transition-all duration-300 group-hover:blur-[3px]"
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-black opacity-40 group-hover:opacity-25 transition-all duration-700"
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