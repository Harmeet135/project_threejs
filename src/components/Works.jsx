import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Works = () => {
  return (
    <motion.div variants={textVariant()}>
 
 
    <div className="flex flex-col align-middle justify-center items-center  rounded-[20px] ">
      <h3 className=" xs:text-[2.2rem] text-[1.8rem] font-[600]">We're Hiring Key Roles</h3>
      <h2 className="my-[0.5rem]">Help us extend the human mind.</h2>
      <button className="bg-[#a784f4] text-[#fff] px-3 py-2 mt-1 font-[500] hover:bg-transparent  border border-[#a784f4]">
        Join us or refer someone!
      </button>
    </div>
    </motion.div>
  );
};

export default SectionWrapper(Works, "");
