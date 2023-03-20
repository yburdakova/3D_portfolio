import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn(",", 0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a software developer with expertise in iOS development, Python, API integration, and databases. I have a passion for using technology to solve complex problems and a high level of algorithmic aptitude. With a solution-oriented approach and attention to detail, I'm dedicated to delivering high-quality products. Let's work together to bring your ideas to life!
      </motion.p>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")