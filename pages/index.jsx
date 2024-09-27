import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useRef, useState } from 'react';

import Head from 'next/head';

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube Player API script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: 'F-2lSWJ8Zxw',
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: 'F-2lSWJ8Zxw',
          mute: 1
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(20);
            setIsVideoLoaded(true);
          }
        }
      });
    };
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
    <Head>
      <title>MetAlc Productions</title>
    </Head>
    <Analytics/>
    <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            MetAlc Productions
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Metaverse Alchemists building Multiversal Realities!
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
          </motion.div>
        </div>
      </div>
    </div>

    <div className="w-full h-0 pb-[56.25%] relative overflow-hidden">
      {!isVideoLoaded && (
        <img 
          src="/poster.jpg" 
          alt="Video Poster" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      <div id="youtube-player" className="absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      <button 
        onClick={toggleMute} 
        className="absolute top-4 left-4 bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center z-10"
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>

    <div className="w-full h-[40vh] lg:h-[30vh] bg-black flex items-center justify-center relative">
      <p className="text-white text-[clamp(18px,3.9vw,30px)] text-center w-[69%] leading-[1.5] lg:top-[-3rem] top-[-2rem] absolute text-bold">
      We are a small venture building and providing services and assets to the public while working on projects in the domain of Gaming, XR, Virtual Production, CGI VFX, 3D Product Visualization, etc.
      </p>
      <Link href="/about" passHref legacyBehavior>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-28 lg:bottom-8 left-1/2 transform -translate-x-1/2"
          whileHover={{ y: [-5, 2], transition: { yoyo: Infinity, duration: 0.5 } }}
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
