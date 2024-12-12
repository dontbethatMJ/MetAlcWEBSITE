import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

import Socials from "../components/Socials";

const Header = ({ isArtworkPage }) => {
  if (isArtworkPage) return null; 

  

  return (
    <header className="absolute z-30 w-full items-center px-6 md:px-16 xl:h-[90px]">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Socials/> 
        </div>
      </div>
    </header>
  );
};

export default Header;
