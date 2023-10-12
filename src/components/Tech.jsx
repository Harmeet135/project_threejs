import React from "react";

import { SectionWrapper } from "../hoc";
import { tech } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";
import "./animate.css"

import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Backed by world-class investors and partners
        </p>
      </motion.div>

      <div className="flex flex-row overflow-hidden gap-10 mt-16 paused">
        {tech.map((technology) => (
          <div className=" flex items-center w-28 h-28 transform transition-all hover:z-10 hover:scale-110 logos-slide" key={technology.name} style={{ minWidth: '100px', minHeight: '100px' }}>
            <img
              src={technology.icon}
              alt={technology.name}
              style={{
                width: '100%',
                height: '100%',
                filter: technology.name === 'solidity1' || technology.name === 'nextjs1' || technology.name === 'express1' ? 'invert(100%)' : 'none',
              }}
            />
          </div>
        ))}


        {tech.map((technology) => (
          <div className=" flex items-center w-28 h-28 transform transition-all hover:z-10 hover:scale-110 logos-slide" key={technology.name} style={{ minWidth: '100px', minHeight: '100px' }}>
            <img
              src={technology.icon}
              alt={technology.name}
              style={{
                width: '100%',
                height: '100%',
                filter: technology.name === 'solidity1' || technology.name === 'nextjs1' || technology.name === 'express1' ? 'invert(100%)' : 'none',
              }}
            />
          </div>
        ))}


      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");