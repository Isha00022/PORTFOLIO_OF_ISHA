import React from "react";
///importing icons
import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Project Trainee-TVS Motor(Design Engineer)",
    description:
      "Developed and deployed encryption and decryption algorithms for secure data communication within automotive systems. Optimized the algorithms, resulting in a reduction of processing time by 9 microseconds. Developed user-friendly GUIs to facilitate software simulation of headlight LEDs in automotive vehicles, simplifying the testing and evaluation process.",
    link: "Learn more",
  },
  {
    name: "Event Manager in TechnoVIT",
    description:
      " Successfully organized the Aim It Out event during the VIT techfest TechnoVIT, which generated a net revenue of 4,000 INR within a span of 4 hours.",
    link: "Learn more",
  },
  {
    name: "Technical Member of Android Club",
    description:
      " Actively completed assigned tasks that encompassed developing the frontend for Android applications using React Native.",
    link: "Learn more",
  },
  {
    name: "Logistics Member of Fitness Club",
    description:
      " Effectively contributed to managing virtual and in-person events.",
    link: "Learn more",
  },

];

const Experience = () => {
  return (
    <section className="section bg-black/20 lg:bg-services2 bg-no-repeat" id="experience">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* ///here is text */}
          <motion.div 
           variants={fadeIn("right", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 ">
            <h2 className="h2 text-accent mb-4">My Experience</h2>
            {/* <h3 className="h3 max-w-[420px] mb-11">
              I'm an undergraduate Btech Student persuing my degree in
              Electronics And Communication
            </h3> */}
            <a href="https://www.linkedin.com/in/isha-gupta-567058204/" target="_blank">
              <button className="btn btn-sm">My LinkedIn</button>
            </a>
            
          </motion.div>
          {/* all the services */}
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            {/* list of services */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  // <div className='border-b border-white/20 h-[146px] mb-[28px] flex' key={index}>
                  <div className='border-b border-white/20  mb-[10px] flex pb-3' key={index} >
                    <div className="max-w-[476px]">
                      <h4 className="text-[18px] tracking-wider font-primaryfont-semibold mb-2">
                        {name}
                      </h4>
                      <p className="text-[13px] leading-6">{description}</p>
                    </div>
                    <div className="text-[14px] flex flex-col flex-1 items-end ">
                      <a href='https://www.linkedin.com/in/isha-gupta-567058204/' target="_blank" className="btn w-5 h-5 mb-[60px] flex justify-center items-center">
                        <BsArrowUpRight/>
                      </a>
                      <a href='https://www.linkedin.com/in/isha-gupta-567058204/' target="_blank" className="text-gradient text-sm text-[12px]">
                          {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
