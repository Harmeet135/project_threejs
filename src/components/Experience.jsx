import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Lottie from "lottie-react"
import { lottie1 } from "../assets";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { DnaCanvas } from "./canvas";
import { heroimg, think } from "../assets";

const ExperienceCard = ({ experience }) => {
  const canvasPosition = experience.date === "2021" ? "left-[124%]" : "right-[131%]";
  const canvasComponent = experience.date === "2021" ? <DnaCanvas /> :   <Lottie animationData={lottie1} />;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
        marginBottom: "4rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      //  date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
     
    <div className={`absolute h-[22rem] w-full xl:flex contents overflow-hidden  justify-center ${canvasPosition} top-[-1.5rem] text-16px text-1rem`}>
    {canvasComponent}
  </div>

      <div>
        <h3 className="text-white text-[24px] font-bold mt-6">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
        </p>
      </div>

      <ul className="mt-5 sm:ml-5 ml-0 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className="mt-20 xs:mt-12 mb-8 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
            
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
