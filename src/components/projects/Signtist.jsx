import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const project = projects[0];

const Screenshot = ({ index, image }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                max: 45,
                scale: 1,
                speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl w-400'
            >
                <div className='relative '>
                    <img
                        src={image}
                        alt='project_image'
                        className='rounded-[30px]'
                    />
                </div>
            </Tilt>
        </motion.div>
    );
};

const Project0 = () => {
    return (
        <>
        <motion.div variants={textVariant()} className="mt-10">
            <p className={`${styles.sectionSubText} `}>Project name</p>
            <div className="flex justify-start mt-4"><img src={project.logo} className=" w-14 h-14 rounded-[10px] mr-6"></img><h2 className={`${styles.sectionHeadText}`}>{project.name}</h2></div>
            
        </motion.div>

        <div className='w-full flex'>
            <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                {project.fulldescription}
                <div className='mt-4 flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
                <p
                key={`${project.name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
                >
                #{tag.name}
                </p>
            ))}
            </div>
            </motion.div>
        </div>

        <div className='mt-14 grid sm:grid-cols-1 lg:grid-cols-4 md:grid-col-2 gap-7 m-5'>
            {project.images.map((image, index) => (
            <Screenshot key={`project-${index}`} index={index} image={image} />
            ))}
        </div>
        </>
    );
};

export default SectionWrapper(Project0, "signtist");