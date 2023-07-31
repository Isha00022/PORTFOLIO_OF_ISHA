import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { Link } from "react-scroll";

import Img1 from "../assets/java.jpg";
import Img2 from "../assets/python.jpeg";
import Img3 from "../assets/microsoft.png";

const Certification = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex:row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* text */}
              <h2 className="h2 leading-tight text-accent mb-7">
                My Certifications <br />
              </h2>
              {/* <p className=" mb-12">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              </p> */}
              <button className="btn btn-sm mb-7">
                <a href="https://www.linkedin.com/in/isha-gupta-567058204/" target="_blank">
                  View all certificates
                </a>
              </button>
            </motion.div>
            {/* all certificates images */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col items-center gap-y-10 lg:flex-row justify-between"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-[250px] w-[350px]">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* image */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img1}
                  alt=""
                />
                {/* pretirle */}
                <div className="absolute -bottom-full left-9 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-gradient">Programming In JAVA</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-9 group-hover:bottom-4 transition-all duration-500 z-50">
                  <span className="text-3xl text-white">
                    NPTEL(IIT Kharagpur)
                  </span>
                </div>
              </div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-[250px] w-[350px]">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* image */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img2}
                  alt=""
                />
                {/* pretirle */}
                <div className="absolute -bottom-full left-9 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-gradient">Python for Data Science</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-9 group-hover:bottom-4 transition-all duration-500 z-50">
                  <span className="text-3xl text-white">NPTEL(IIT Madras)</span>
                </div>
              </div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-[250px] w-[350px]">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* image */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img3}
                  alt=""
                />
                {/* pretirle */}
                <div className="absolute -bottom-full left-9 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-gradient">Microsoft Security, Compliance and Identity Fundamentals</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-9 group-hover:bottom-4 transition-all duration-500 z-50">
                  <span className="text-3xl text-white">Microsoft</span>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <div className="flex flex-">2222222222222</div> */}
        </div>
      </div>
    </section>
  );
};

export default Certification;
