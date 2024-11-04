import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowDown } from 'react-icons/fa';

import Head from 'next/head';

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const playerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const initializeYouTubePlayer = () => {
      if (typeof window.YT === 'undefined') {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = loadPlayer;
      } else {
        loadPlayer();
      }
    };

    const loadPlayer = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: 'F-2lSWJ8Zxw',
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: 'F-2lSWJ8Zxw',
          mute: 1,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(20);
            setIsVideoLoaded(true);
          }
        }
      });
    };

    initializeYouTubePlayer();

    // Cleanup function
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [router.asPath]);

  useEffect(() => {
    // Reload the page when the route changes
    const handleRouteChange = () => {
      window.location.reload();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
            className="h1 -ml-1 mb-2 text-[56px] md:text-[62px]"
          >
            MetAlc Productions
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-xl text-[#ffffffc8]"
          >
            Metaverse Alchemists building Multiversal Realities!
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="hidden xl:flex"
          >
          </motion.div>
        </div>
      </div>
    </div>

    <div className="w-full h-0 pb-[56.25%] relative overflow-hidden">
      {!isVideoLoaded && (
        <img 
          src="/poster.png" 
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
      <p className="text-white text-[clamp(18px,3.9vw,30px)] text-center w-[75%] leading-[1.5] lg:top-[-3rem] top-[-2rem] absolute text-bold font-poppins">
        <span className="text-bold">The Future is NOW!</span>
        <br/>
        We are a small venture trying to build a small space for ourselves in this big universe of metaverse that will truly lead the world in a few years . . .
      </p>
      <button
        onClick={() => window.location.href = '/projects'}
        className="mb-4 hidden md:block"
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
            className="rotate-90 w-8 h-8 mt-16 cursor-pointer hover:scale-110 transition-transform mx-auto"
          />
        </motion.div>
      </button>
    </div>

    <div className="absolute bottom-36 md:bottom-4 left-[50%] translate-x-[-50%] flex scroll-indicator opacity-80">
      Scroll Down <span className="p-1"><FaArrowDown/></span>
    </div>

  </>
  );
};

export default Home;
