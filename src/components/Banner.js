import React from "react";
//import image
import Image from "../assets/avatar.svg";
import Image2 from "../assets/avatarImg.png";
import Image3 from "../assets/but.png";
import Image4 from "../assets/bg3.png";
import Contact from "./Contact";
import { Link } from "react-scroll";

import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { BiLogoGmail } from 'react-icons/bi';

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import Header from "./Header";

const Banner = () => {
  return (
    <section
      className="section flex flex-col pt-0 bg-home blend-mix-lighten bg-no-repeat bg-right bg-scale-200"
      id="home"
    >
      <div className="w-full">
        <Header />
      </div>

      <div className="container mx-auto mt-0 ">
        <div className="flex flex-col gap-y-8 lg:flex-row ">
          {/* text for name and role */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px]"
            >
              Isha <span>Gupta</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Engineer",
                  2000,
                  "Student",
                  2000,
                  "Learner",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            {/* max-w lg is defines in screens in tw config */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Passionate about creating innovative solutions and driven by a
              thirst for continuous learning.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* social media */}
            {/* max-auto with max-w-max(used for calculating diffwidths when we make the screen smaller) helps to keep the item in between by dividing the left and rught margins */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-30"
            >
              <a href="https://www.linkedin.com/in/isha-gupta-567058204/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Isha00022?tab=repositories" target="_blank">
                <FaGithub />
              </a>
              <a href="mailto:ishagupta8085@gmail.com" target="_blank">
                <BiLogoGmail/>
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            // viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[350px] lg:max-h-[350px] mb-20"
          >
            {/* cover photo main */}
            {/* <img className="blend-mix-lighten h-10px" src={Image4} alt="" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
