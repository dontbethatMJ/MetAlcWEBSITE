import Link from "next/link";
import Image from "next/image";

// Import image files
import YoutubeIcon from '../public/youtube.svg';
import InstagramIcon from '../public/instagram.webp';
import LinkedinIcon from '../public/linkedin.webp';
import TwitterIcon from '../public/twitter.webp';
import DiscordIcon from '../public/discord.svg';

import logo from '../public/favicon.webp';

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/metalcproductions/",
    icon: LinkedinIcon,
  }, 
  {
    name: "Discord",
    link: "https://discord.gg/uqZ9Z7Hawy",
    icon: DiscordIcon,
  },  
  {
    name: "Twitter",
    link: "https://x.com/MetAlcProd",
    icon: TwitterIcon,
  },  
  {
    name: "Instagram",
    link: "https://www.instagram.com/metalcproductions/",
    icon: InstagramIcon,
  }, 
  {
    name: "Youtube",
    link: "https://www.youtube.com/@MetAlcProductions",
    icon: YoutubeIcon,
  },
];

const Socials = () => {

  return (
    <div className="flex items-center gap-x-5 text-lg w-full justify-between">
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => window.location.href = "https://www.metalcproductions.com"}
      >
        <Image src={logo} alt="Logo" width={64} height={64} />
        <p className="font-anita text-white text-sm">
          Metalc
          <br />
          Productions
        </p>
      </div>
      <div className="flex items-center justify-center gap-x-2 md:gap-x-5">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="group transition-all duration-300"
        >
          <div className="transform transition-transform group-hover:-translate-y-0.5">
            <Image 
              src={social.icon} 
              alt={social.name} 
              width={24}
              height={24}  
            />
          </div>
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Socials;
