import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// icons
import homeIcon from "../public/home.svg";
import aboutIcon from "../public/about.svg";
import servicesIcon from "../public/services.svg";
import workIcon from "../public/projects.png";
import testimonialsIcon from "../public/testimonials.png";
import contactIcon from "../public/contactus.png";
import blogIcon from "../public/newsletter.png";
import artworksIcon from "../public/artworks.png";

// Import hamburger icon
import Image from "next/image";
import hamburgerImg from "../public/hamburger.png";

export const navData = [
  { name: "home", path: "/", Icon: homeIcon, text: "Home" },
  { name: "projects", path: "/projects", Icon: workIcon, text: "Projects" },
  { name: "services", path: "/services", Icon: servicesIcon, text: "Services" },
  { name: "testimonials", path: "/testimonials", Icon: testimonialsIcon, text: "Testimonials" },
  { name: "contactUs", path: "/contactus", Icon: contactIcon, text: "Contact Us" },
  { name: "aboutUs", path: "/aboutus", Icon: aboutIcon, text: "About Us" },
  // { name: "newsletter", path: "/newsletter", Icon: blogIcon, text: "NewsLetter" },
  { name: "artwork", path: "https://community.metalcproductions.com/artwork", Icon: artworksIcon, text: "Artwork" },
];

const Nav = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={`select-none flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[4%] z-50 top-2 w-full xl:w-14 xl:max-w-sm xl:h-screen transition-all duration-500 ${expanded ? "xl:w-44 xl:pl-5 xl:text-right" : ""}`}>
      <div className={`flex w-full xl:flex-col items-center ${expanded ? "justify-end xl:justify-end" : "justify-center"} gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl transition-all duration-500 ${expanded ? "xl:pr-5" : ""}`}>
        <div className={`relative hidden xl:flex items-center ${expanded ? "ml-auto" : "mx-auto"} cursor-pointer select-none`} onClick={toggleExpand}>
          {expanded && <div className="text-white text-sm mr-2 transition-all duration-1000">Menu</div>}
          <Image src={hamburgerImg} alt="Menu" width={20} height={20} />
        </div>
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center ${expanded ? "justify-end" : "justify-center"} w-full group hover:text-accent transition-all duration-1000`}
            href={link.path}
            key={i}
          >
            {/* tooltip */}
            {!expanded && (
              <div
                role="tooltip"
                className="absolute pr-14 right-0 hidden xl:group-hover:flex"
              >
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize transition-all duration-1000">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                    aria-hidden
                  />
                </div>
              </div>
            )}

            {/* icon */}
            <div className="relative flex items-center">
              {expanded && (
                <div className="mr-2 text-white text-sm xl:block hidden transition-all duration-1000">{link.text}</div>
              )}
              <Image src={link.Icon} alt={link.name} width={20} height={20} aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
