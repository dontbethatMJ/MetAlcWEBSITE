import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import TeamMember from "../TeamMember";
import { useRouter } from 'next/router'; // Import useRouter
import { fadeIn } from "../../variants";
import Head from 'next/head';


const About = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter(); // Initialize router

  return (
    <>
    <Head>
        <title>MetAlc Productions</title>
    </Head>
    <div 
      className="h-screen py-8 md:py-12 text-center xl:text-left flex flex-col relative" 
      style={{
        backgroundImage: "url('/bg23.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }}
    >

      <div className="flex-1 container mx-auto flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 text-2xl md:text-3xl lg:text-4xl mb-4 md:mt-8"
          >
            When we started <span className="text-[#6fc3ce]">. . .</span>

          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[900px] mx-auto xl:mx-0 mb-4 xl:mb-6 px-2 xl:px-0 text-sm md:text-base text-[#ffffffc8]"
          >
            We were just us two beginners who had just stepped into game development because we love gaming. In the past 3 years, we met a lot of people, founded a team, built many projects, and held workshops and seminars. We work in the domains of Game Dev, XR, Virtual Production, CGI VFX, 3D Product Visualization, etc for consumers, brands and agencies.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex justify-between w-full max-w-3xl mx-auto mb-8 md:mt-6 text-center"
          >
            {/* experience */}
            <div className="flex-1 border-r border-gray-700 last:border-r-0">
              <div className="text-4xl font-bold text-[#6fc3ce] mb-2">
                <CountUp start={0} end={2} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-wider">
                Years of<br />experience.
              </div>
            </div>

            {/* clients */}
            <div className="flex-1 border-r border-gray-700 last:border-r-0">
              <div className="text-4xl font-bold text-[#6fc3ce] mb-2">
                <CountUp start={0} end={5} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-wider">
                Satisfied<br />clients.
              </div>
            </div>

            {/* projects */}
            <div className="flex-1 border-r border-gray-700 last:border-r-0">
              <div className="text-4xl font-bold text-[#6fc3ce] mb-2">
                <CountUp start={0} end={10} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-wider">
                Finished<br />projects.
              </div>
            </div>
          </motion.div>

          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center"
            variants={fadeIn("right", 0.2)} 
            initial="hidden" 
            animate="show"
          >
            Meet the <span className="text-[#6fc3ce]">Team</span>
          </motion.h2>
          <div className="flex flex-col"> {/* Parent div to wrap both rows */}
            <motion.div 
              className="flex justify-center gap-4 mb-4 mt-4" // Added margin for spacing
              variants={fadeIn("right", 0.2)} 
              initial="hidden" 
              animate="show" 
            >
              <TeamMember
                key={1}
                name="Mudit Jain"
                role="Founder" 
                description="XR Developer"
                imageSrc="/mj.jpg"
                link="https://example.com/mudit" // Added link
              />
              <TeamMember
                key={2}
                name="Ayush Pandey"
                role="Co-founder"
                description="Technical Artist"
                imageSrc="/ap.jpg"
                link="https://example.com/ayush" // Added link
              />
            </motion.div>

            {/* <motion.div 
              className="flex flex-wrap justify-center gap-4" // Added flex-wrap for responsiveness
              variants={fadeIn("right", 0.2)} 
              initial="hidden" 
              animate="show" 
            >
              <div className="flex-1 min-w-[150px] max-w-[200px]"> 
                <TeamMember
                  key={3}
                  name="John Doe"
                  role="Developer"
                  description="Game Developer"
                  imageSrc="/mj.jpg"
                  link="https://example.com/john" // Added link
                />
              </div>
              <div className="flex-1 min-w-[150px] max-w-[200px]">
                <TeamMember
                  key={4}
                  name="Jane Smith"
                  role="Designer"
                  description="UI/UX Designer"
                  imageSrc="/mj.jpg"
                  link="https://example.com/jane" // Added link
                />
              </div>
              <div className="flex-1 min-w-[150px] max-w-[200px]">
                <TeamMember
                  key={5}
                  name="Alice Johnson"
                  role="Artist"
                  description="3D Artist"
                  imageSrc="/mj.jpg"
                  link="https://example.com/alice" // Added link
                />
              </div>
              <div className="flex-1 min-w-[150px] max-w-[200px]">
                <TeamMember
                  key={6}
                  name="Bob Brown"
                  role="Producer"
                  description="Project Producer"
                  imageSrc="/mj.jpg"
                  link="https://example.com/bob" // Added link
                />
              </div>
            </motion.div> */}
            
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mb-4" style={{ marginBottom: '1rem' }}>
        <button
            onClick={() => window.location.href = '/services'}
            className="hidden md:block"
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
              className="rotate-90 w-8 h-8 cursor-pointer hover:scale-110 transition-transform mx-auto -mt-16"
            />
          </motion.div>
        </button>
      </div>
    </div>
    </>
  );
};

export default About;