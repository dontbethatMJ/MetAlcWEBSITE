import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiDiscordLine,
 
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/metalcproductions/",
    Icon: RiInstagramLine,
  },  
  {
    name: "Twitter",
    link: "https://x.com/MetAlcCommunity",
    Icon: RiTwitterLine,
  }, 
  {
    name: "Discord",
    link: "https://discord.gg/uqZ9Z7Hawy",
    Icon: RiDiscordLine,
  },   
  {
    name: "Youtube",
    link: "https://www.youtube.com/@MetAlcProductions",
    Icon: RiYoutubeLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/metalcproductions/",
    Icon: RiLinkedinLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 text-lg w-full">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;