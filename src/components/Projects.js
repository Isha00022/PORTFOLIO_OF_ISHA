import React from "react";
///importing icons
import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Automated Fish Pond Monitoring System",
    description1:
      " We successfully extracted labels from continuous fish pond data using a machine learning approach, achieving an accuracy of 99%.",
    description2:
      " The model has been integrated into a React-based dashboard and Flask server to display sensor data and provide real-life predictions. The sensors, connected to a microcontroller, send data to the Flask server.",
    description3:
      " Additionally, all real-time data is stored in a MySQL database for further analysis and retrieval.",
    link: "Learn more",
    reallink: "https://github.com/Isha00022/sensorDataDashboard_forWaterQualityDetectionOfFishTank",
  },
  {
    name: "Speech Based Emotion Prediction System",
    description1:
      "  The features of the TensorFlow voice dataset were extracted as an MFCC feature matrix. This matrix was used as input to an Artificial Neural Network (ANN) model, resulting in an impressive accuracy of 99.2%. ",
    description2:
      " The model has been integrated into a React-based dashboard and Flask server to display sensor data and provide real-life predictions.",
    description3: " The sensors, connected to a microcontroller, send data to the Flask server.",
    link: "Learn more",
    reallink: "https://github.com/Isha00022/speechrecognitionapp",
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
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-4">My Projects</h2>
            {/* <h3 className="h3 max-w-[420px] mb-11">
              I'm an undergraduate Btech Student persuing my degree in
              Electronics And Communication
            </h3> */}
            <a href="https://github.com/Isha00022?tab=repositories" target="_blank">
              <button className="btn btn-sm">My Github</button>
            </a>
           
          </motion.div>
          {/* all the services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* list of services */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description1, description2, description3, link,reallink } =
                  service;
                return (
                  // <div className='border-b border-white/20 h-[146px] mb-[28px] flex' key={index}>
                  <div
                    className="border-b border-white/20 mb-[10px] flex pb-3"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[18px] tracking-wider font-primaryfont-semibold mb-2">
                        {name}
                      </h4>
                      <ul className="list-disc">
                        <li><p className="text-[14px]">{description1}</p></li>
                        <li><p className="text-[14px]">{description2}</p></li>
                        <li><p className="text-[14px]">{description3}</p></li>
                      </ul>
                      
                    </div>
                    <div className="text-[20px] flex flex-col flex-1 items-end">
                      <a
                        href={reallink} 
                        target="_blank"
                        className="btn w-5 h-5 mb-[200px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href={reallink} target="_blank" className="text-gradient text-sm text-[12px]">
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
