import Link from "next/link";
import Image from "next/image";

// Import image files
import YoutubeIcon from '../public/youtube.svg';
import InstagramIcon from '../public/instagram.png';
import LinkedinIcon from '../public/linkedin.png';
import TwitterIcon from '../public/twitter.png';
import DiscordIcon from '../public/discord.svg';

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

const Socials = ({ isArtworkPage }) => {
  if (isArtworkPage) return null; 

  return (
    <div className="flex items-center gap-x-5 text-lg w-full justify-center md:justify-end">
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
  );
};

export default Socials;
