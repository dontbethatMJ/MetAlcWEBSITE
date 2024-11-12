import { motion } from "framer-motion";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";
import Link from 'next/link';
import Head from 'next/head';

const Work = () => {
  return (
    <>
    <Head>
        <title>MetAlc Productions</title>
    </Head>
    <div 
      className="h-dvh py-36 flex items-center overflow-hidden relative"
      style={{
        backgroundImage: 'url("/bg23.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 justify-center items-center">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="h2 xl:mt-12 text-3xl md:text-5xl md:ml-[1.5rem]"
            >
              Our Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-center"
            >
              (Hover on the boxes to know more)
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            className="w-full xl:max-w-[65%]"
          >
            {/* New text added here */}
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="text-center mb-4 text-white"
            >
              Swipe to see more
            </motion.p>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      
      <style jsx global>{`
        html, body {
          overflow: hidden;
          height: 100%;
          margin: 0;
          padding: 0;
        }
        #__next {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <button
        onClick={() => window.location.href = '/services'}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block" // Centered and hidden on small devices
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ y: [-5, 2], transition: { yoyo: Infinity, duration: 0.5 } }}
        >
          <img
            src="/arrow.webp"
            alt="Down Arrow"
            className="rotate-90 w-8 h-8 cursor-pointer hover:scale-110 transition-transform mx-auto"
          />
        </motion.div>
      </button>
    </div>
    
    </>
  );
};

export default Work;
