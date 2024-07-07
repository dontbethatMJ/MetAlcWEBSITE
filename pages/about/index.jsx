import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import TeamMember from "../TeamMember";



import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
 
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
 
  
 
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left flex flex-col  overflow-y-auto">
      <Circles />

    
      

      <div className="flex-1 container mx-auto flex flex-col items-center xl:flex-row gap-x-6 overflow-y-auto">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I begin freelancing as a developer. Since then, I've
            done remote work for agencies, consulted for startups, and
            collabrated on digital products for business and consumer use.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 md:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>

          {/* meet the team section */}
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-8 text-center mt-[100px]">Meet the <span className="text-accent">Team</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto md:ml-[350px]">
            
              <TeamMember
              key={0}
              name="Mudit Jain"
             
              description="Founder and CEO of company "
              imageSrc= "https://tse1.mm.bing.net/th?id=OIP.cxcqa9RvhGnRd8x3N2oBdgHaHn&pid=Api&P=0&h=180"/>

<TeamMember
              key={0}
              name="Ayush Pandey"
             
              description="Founder and CEO of company "
              imageSrc= "https://tse1.mm.bing.net/th?id=OIP.cxcqa9RvhGnRd8x3N2oBdgHaHn&pid=Api&P=0&h=180"/>
            
            </div>
          {/* <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items -center xl:items-start">
            
          </div> */}

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial= "hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:flex-col w-full md:xl:max-w-[48%] h-[480px] mx-auto  xl:ml-0"></motion.div>
        
        </div>

    
       
        
       
      </div>

     
           
          </div>
   
  );
};

export default About;