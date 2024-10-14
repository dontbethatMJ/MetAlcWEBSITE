import { motion } from "framer-motion";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";
import Link from 'next/link';
import Head from 'next/head';

export const serviceData = [];

const Services = () => {
  return (
    <>
    <Head>
        <title>MetAlc Productions</title>
    </Head>
    <div className="h-screen bg-[url('/bg23.png')] bg-cover bg-center py-36 flex items-center overflow-hidden relative">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="h2 xl:mt-8 md:text-5xl text-3xl"
            >
              Our services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-[#ffffffe0]"
            >
              We plan to cover not just one sector of gaming and xr industry, we aim to be a master of all trades namely, Gaming, XR, Virtual Production, CGI VFX, 3D Product Visualization, Web Development (frontend) and App Development.

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
              Swipe right to see more
            </motion.p>
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      {/* Down Arrow */}
      <button
        onClick={() => window.location.href = '/projects'}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block" // Centered and hidden on small devices
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ y: [-5, 2], transition: { yoyo: Infinity, duration: 0.5 } }}
        >
          <img
            src="/arrow.png"
            alt="Down Arrow"
            className="rotate-90 w-8 h-8 cursor-pointer hover:scale-110 transition-transform mx-auto"
          />
        </motion.div>
      </button>
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
    </div>
    </>
  );
};

export default Services;
