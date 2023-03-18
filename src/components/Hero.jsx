import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import AppleCanvas from './canvas/Apple';
import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#264f82]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#264f82]">Sergey</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop iOS Applications and Backend.&nbsp;
            <br className='sm:block hidden'/> 
            Your App will be creative and fast.</p>
        </div>
      </div>
      <AppleCanvas/>
      <div className="absolute bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[28px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate ={{y:[0,20,0]}}
              transition ={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}


export default SectionWrapper(Hero, 'hero')