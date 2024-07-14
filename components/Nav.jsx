import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { FaBloggerB } from "react-icons/fa6";

// Import hamburger icon
import Image from "next/image";
import hamburgerImg from "../public/hamburger.png";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome, text: "Home" },
  { name: "about", path: "/about", Icon: HiUser, text: "About" },
  { name: "services", path: "/services", Icon: HiRectangleGroup, text: "Services" },
  { name: "work", path: "/work", Icon: HiViewColumns, text: "Work" },
  { name: "testimonials", path: "/testimonials", Icon: HiChatBubbleBottomCenterText, text: "Testimonials" },
  { name: "contact", path: "/contact", Icon: HiEnvelope, text: "Contact" },
  { name: "Blog", path: "/blog", Icon: FaBloggerB, text: "Blog" },
];

const Nav = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={`flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[4%] z-50 top-2 w-full xl:w-14 xl:max-w-sm xl:h-screen transition-all duration-500 ${expanded ? "xl:w-44 xl:pl-5 xl:text-right" : ""}`}>
      <div className={`flex w-full xl:flex-col items-center ${expanded ? "justify-end xl:justify-end" : "justify-center"} gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl transition-all duration-500 ${expanded ? "xl:pr-5" : ""}`}>
        {/* Hamburger icon */}
        <div className={`relative xl:block ${expanded ? "ml-auto" : "mx-auto"} cursor-pointer select-none`} onClick={toggleExpand}>
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
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
