import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#264f82]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#264f82]">Sergey</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop backend and iOS applications. 
            <br className='sm:block hidden'/> 
            Your app will be creative and fast.</p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero