import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gp-x-20 lg:gap-y-0 h-screen">
          {/* images */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-about bg-contain bg-no-repeat lg:h-[580px] mix-blend-lighten bg-top mr-10 mt-5"
          ></motion.div>
          {/* text */}

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I am a passionate B.Tech undergraduate student venturing into the
              field of SOFTWARE DEVELOPMENT, continuously striving to expand my
              knowledge and skills every day.
            </h3>
            <p className="mb-3 text-[15px]">
              I have a strong interest in development and enjoy staying updated
              with the latest trends and advancements in the tech world. What
              sets me apart is my enthusiasm for learning and exploring new
              things. I thrive on challenges and am constantly seeking
              opportunities to expand my knowledge and skill set.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-4 ">
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-0.5">
                {inView ? <CountUp start={0} end={8} duration={3} /> : null}.{inView ? <CountUp start={0} end={8} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[1px]">
                  CGPA
                </div>
              </div>
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-0.5">
                {inView ? <CountUp start={80} end={95} duration={3} /> : null}.{inView ? <CountUp start={0} end={6} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[1px]">
                  12th
                </div>
              </div>
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-0.5">
                  {inView ? <CountUp start={80} end={92} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[1px]">
                  10th
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-sm">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Protfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
