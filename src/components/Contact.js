import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iftphxw",
        "template_a1z3zsl",
        form.current,
        "sBr10oclAaaVlfsSE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("messege sent");
        },
        (error) => {
          console.log(error.text);
          console.log("error");
        }
      );
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row lg:space-x-10"
        >
          {/* text */}
          <div>
            <div>
              <h4 className="text-xl uppercase text-accent font-meium mb-2 tracking-wide">
                get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-11 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="user_name"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="user_email"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-5 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-6"
              type="text"
              name="message"
              placeholder="Your message"
            ></textarea>
            {/* <input type="submit" value="Send" /> */}
            <button className="btn btn-lg" onSubmit={sendEmail}>Send message</button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
