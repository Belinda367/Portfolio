import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-blue border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Infoimation in Business Systems"
            subTitle="IT course (2018 - 2021)"
            result="Degree"
            des="Certificate awarded for successfully completing the course ."
          />
          <ResumeCard
            title="Atos Certificate"
            subTitle=" Learnership (2016 - 2017)"
            result="Certificate"
            des="Awarded a certificate for successfully completing the course ."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
