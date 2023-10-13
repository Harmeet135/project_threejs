import React from "react";

import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

const Tech = () => {
  return (
    <>
      <div className="bg-black-100 pt-10 px-5">
        <motion.div variants={textVariant()}>
          <h2 className="text-xl sm:text-3xl font-inter font-medium text-center">
            Backed by world-class investors and partners
          </h2>
        </motion.div>

        <motion.div variants={textVariant()}>
          <div className="flex items-center justify-center gap-8 sm:gap-16 lg:gap-28 pt-10 flex-wrap">
            <img
              className="h-8 sm:h-12 md:h-16"
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f47c6178fd2b29210de_first%20round.png"
              alt="investors"
            />
            <img
              className="h-8 sm:h-12 md:h-16"
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f47257981290f6013fd_8vc%20white.png"
              alt="investors"
            />
            <img
              className="h-8 sm:h-12 md:h-16"
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f473672ef81aad53378_startx.png"
              alt="investors"
            />
            <div className="sm:text-2xl md:text-3xl lg:text-4xl">+33 more</div>
          </div>
        </motion.div>
        <div className="flex flex-row overflow-hidden gap-10 mt-16 paused"></div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");