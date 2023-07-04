import React from "react";
///importing icons
import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumillum optio expedita laborum eius saepe culpa accusamus maiores",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumillum optio expedita laborum eius saepe culpa accusamus maiores",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumillum optio expedita laborum eius saepe culpa accusamus maiores",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumillum optio expedita laborum eius saepe culpa accusamus maiores",
    link: "Learn more",
  },
];

const Projects = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* ///here is text */}
          <motion.div 
           variants={fadeIn("right", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 ">
            <h2 className="h2 text-accent mb-4">My Projects</h2>
            <h3 className="h3 max-w-[420px] mb-11">
              I'm an undergraduate Btech Student persuing my degree in
              Electronics And Communication
            </h3>
            <button className="btn btn-sm">See my work</button>
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
                  <div className='border-b border-white/20 h-[120px] mb-[10px] flex' key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[18px] tracking-wider font-primaryfont-semibold mb-2">
                        {name}
                      </h4>
                      <p className="text-[14px]">{description}</p>
                    </div>
                    <div className="text-[14px] flex flex-col flex-1 items-end">
                      <a href='#' className="btn w-5 h-5 mb-[60px] flex justify-center items-center">
                        <BsArrowUpRight/>
                      </a>
                      <a href='#' className="text-gradient text-sm text-[12px]">
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

export default Projects;
