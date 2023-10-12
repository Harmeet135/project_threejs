import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <>
    <div className="xs:grid  gap-12 sm:grid-cols-4 sm:justify-end">
    {/* First column (2fr) */}
    <div className="col-span-2">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl flex flex-col items-center justify-center"
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        <h3 className={styles.sectionHeadText}>Ideaflow</h3>
        <div className="lg:h-[20rem] h-[12rem]">
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
    <motion.div
     className="col-span-1"
        variants={slideIn("right", "tween", 0.2, 1)}
    
      > 
    {/* Second column (1fr) */}
      <div className="flex flex-col items-start mt-4">
        <a href="#" className="block text-white font-bold text-center text-xl py-4">
          #rabbithole
        </a>
        <ul>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">Memex</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1 leading-5"><a href="#">Niklas Luhmann's Zettelkasten</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1 leading-5"><a href="#">Collective IQ</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">Intelligence amplification</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1 leading-5"><a href="#">Tim Berners-Lee’s Giant Global Graph</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">Polymath Project</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1 leading-5"><a href="#">Category Theory for Scientists</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">ideaflowplan.jacobcole.net</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </motion.div>
    {/* Third column (1fr) */}

    <motion.div
    className="lg:flex gap-16"
        variants={slideIn("right", "tween", 0.2, 1)}
    
      >
    <div className="col-span-1">
      <div className="flex flex-col items-start mt-4">
        <a href="#" className="block text-white font-bold text-center text-xl py-4">
        Updates
        </a>
        <ul>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">blog</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">Funding</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">Bullet View Video</a></li>
        </ul>
      </div>
    </div>
    
    <div className="col-span-1">
      <div className="flex flex-col items-start mt-4">
        <a href="#" className="block text-white font-bold text-center text-xl py-4">
          Contact
        </a>
        <ul>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">Email</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">linkedIn</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">facebook</a></li>
          <li className="hover:underline sm:mb-[10px] mb-1"><a href="#">Twitter</a></li>
        </ul>
      </div>
      </div>
    </motion.div>

   
  </div>
  <span className="flex align-middle justify-center text-center mt-4">Copyright © 2023 harmeet. All rights reserved.</span>
  </>
  );
};

export default SectionWrapper(Contact, "contact");
