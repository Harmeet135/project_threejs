import { motion } from "framer-motion";
import about from "../assets/about.png";

const Hero = () => {
  return (
    <section
      className={`lg:relative lg:h-[100vh] sm:h-[120vh] pt-28 mx-auto mb-4 flex flex-col justify-center items-center gap-20 `}
    >
      
      <div
        className={`lg:absolute inset-0 top-[180px]  max-w-7xl mx-auto flex flex-row items-start gap-5 lg:px-16 sm:px-2 pr-14`}
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-80 violet-gradient" />
        </div>

        <div className="lg:w-[36rem] sm:w-[32rem] sx:w-[20] w-[13rem]">
          <h2
            className={`font-[600]  xs:text-[50px] text-[40px] lg:leading-[50px] text-white xs:leading-[58px] leading-[55px]`}
          >
            The
            <span className="text-[#915EFF]"> Intelligence Amplification </span>
            Company
          </h2>
          <p className="text-center mb-10 font-red-hat-display text-20 mt-6">
            We’re creating an ecosystem for humans and machines to work together
            to solve the world’s most important problems – starting with a
            notebook that augments your intelligence.
          </p>
          {/* </p> */}
          <div className="flex sm:gap-8 text-[#a784f4] text-[1.2rem] sm:flex-row flex-col gap-[0.6rem]">
            <button className="bg-[#a784f4] font-[500] text-[black] px-2 py-[0.3rem] hover:bg-transparent hover:text-[#fff] border border-[#a784f4] ">
              Try ideaFlow Notes
            </button>
            <button className="hover:text-[#fff]">ios</button>
            <button className="hover:text-[#fff]">Guide</button>
            <button className="hover:text-[#fff]">Twitter</button>
            <button className="hover:text-[#fff]">Newsletter</button>
          </div>
        </div>
        </div>
      <div className="lg:absolute bottom-0 w-[15rem] right-[1rem] lg:w-[33rem] xs:w-[22rem]">
        <img className="w-55" src={about} alt="" />
      </div>
    </section>
  );
};

export default Hero;
