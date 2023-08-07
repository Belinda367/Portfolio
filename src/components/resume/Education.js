import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Information Technology in Business Systems"
            subTitle="Rosebank College (2018 - 2021)"
            des="Studied IT related subjects like Business Analysis, Programming, Web Development, Database, etc."
          />
          <ResumeCard
            title="Primary School Education"
            subTitle="Sunrise Combined College (2003 - 2009)"
            des=" studied in this school from grade 1 to grade 7. "
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Sir Pierre Van Ryneveld High School (2010 - 2015)"
            des=": studied in this college for 4 years."
          />
        </div>
      </div>
      {/* part Two */}

      
          
          
          /
        
    </motion.div>
  );
}

export default Education