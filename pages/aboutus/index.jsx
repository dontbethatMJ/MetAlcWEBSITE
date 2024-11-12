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
        backgroundImage: "url('/bg23a.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: 'fit-content',
        }}
    >

      <div className="flex-1 container mx-auto flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 text-2xl md:text-3xl lg:text-4xl mb-4 mt-8"
          >
            Our starting point <span className="text-[#6fc3ce]">. . .</span>

          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[900px] mx-auto xl:mx-0 mb-4 xl:mb-6 px-2 xl:px-0 text-sm md:text-base text-[#ffffffc8]"
          >
            In the beginning of it's creation, there were only two escapists who enjoyed living in their own world, gaming all day, manifesting worlds and making memories. Gradually a team came together, hosted workshops and seminars, made projects and have been doing service based work out of passion for brands and agencies. At some point they named the team, Metaverse Alchemists, and founded this, the <span className="font-bold"> MetAlc Productions</span>.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex justify-between w-full max-w-3xl mx-auto mb-16 md:mt-6 text-center"
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
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center"
            variants={fadeIn("right", 0.2)} 
            initial="hidden" 
            animate="show"
          >
            Meet the <span className="text-[#6fc3ce]">Team</span>
          </motion.h2>

          <div className="flex flex-col"> 
            <motion.div 
              className="flex flex-wrap justify-center gap-4 md:mt-8"
              variants={fadeIn("right", 0.2)} 
              initial="hidden" 
              animate="show" 
            >
              <div className="flex-1 min-w-[150px] max-w-[200px]"> 
                <div>
                  <TeamMember
                    key={3}
                    name="Mudit Jain"
                    role="Co-Founder"
                    description="XR Designer"
                    imageSrc="/mj.webp"
                    link="https://www.linkedin.com/in/dontbethatmj/"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-[150px] max-w-[200px]">
                <div>
                  <TeamMember
                    key={4}
                    name="Ayush Pandey"
                    role="Co-Founder"
                    description="Technical Artist"
                    imageSrc="/ap.webp"
                    link="https://www.linkedin.com/in/ayushpandeyap/"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 md:mt-6"
              variants={fadeIn("right", 0.2)} 
              initial="hidden" 
              animate="show" 
            >
            <div className="flex-1 min-w-[150px] max-w-[200px]">
              <div>
                <TeamMember
                  key={6}
                  name="Ali Qadir"
                  role="Game Developer"
                  description=""
                  imageSrc="/aq.webp"
                />
              </div>
            </div>
              <div className="flex-1 min-w-[150px] max-w-[200px]"> 
                <div>
                  <TeamMember
                    key={3}
                    name="Shagnik Chakraborty"
                    role="XR Developer"
                    description=""
                    imageSrc="/sc.webp"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-[150px] max-w-[200px]">
                <div>
                  <TeamMember
                    key={5}
                    name="Ridhim Dubey"
                    role="3D Artist"
                    description=""
                    imageSrc="/rd.webp"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-[150px] max-w-[200px]">
                <div>
                  <TeamMember
                    key={4}
                    name="Rachell Gupta"
                    role="Community Manager"
                    description=""
                    imageSrc="/rg.webp"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-8 md:mt-6 mb-4"
              variants={fadeIn("right", 0.2)} 
              initial="hidden" 
              animate="show" 
            >
              <div className="flex-1 min-w-[150px] max-w-[200px]"> 
                <div>
                  <TeamMember
                    key={3}
                    name="Tarun Gupta"
                    role="Web Developer"
                    description=""
                    imageSrc="/tg.webp"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-[150px] max-w-[200px]"> 
                <div>
                  <TeamMember
                    key={3}
                    name="Dakshi Goel"
                    role="AI & Front-end Developer"
                    description=""
                    imageSrc="/dg.webp"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-[150px] max-w-[200px]"> 
                <div>
                  <TeamMember
                    key={3}
                    name="Tushar Maithani"
                    role="App Developer"
                    description=""
                    imageSrc="/tm.webp"
                  />
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mb-4" >
        <button
            onClick={() => window.location.href = '/artwork'}
            className="hidden md:block"
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
    </div>
    </>
  );
};

export default About;
