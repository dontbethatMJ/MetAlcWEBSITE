import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Link from 'next/link';
// import ParticlesContainer from "../components/ParticlesContainer";
// import SpaceshipsCanvas from "../components/canvas/Spaceships";
import { Analytics } from "@vercel/analytics/react"

import Head from 'next/head';

const Home = () => {
  return (
    <>
    <Head>
        <title>MetAlc Productions</title>
    </Head>
    <Analytics/>
    <div className="bg-primary/60 h-full relative">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            MetAlc <br />
            <span className="text-accent">Productions</span>
          </motion.h1>
          {/* <SpaceshipsCanvas /> */}

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Transforming Ideas Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.p>

          {/* btn */}
          {/* <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div> */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            {/* <ProjectsBtn /> */}
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        {/* <ParticlesContainer /> */}
      </div>
      
      {/* Down Arrow */}
      <Link href="/about" passHref legacyBehavior>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <img
            src="/arrow.png"
            alt="Down Arrow"
            className="rotate-90 w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
          />
        </motion.a>
      </Link>
    </div>
  </>
  );
};

export default Home;