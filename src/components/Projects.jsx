import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {motion} from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { experiences } from '../constants';


const ProjectsCard = ({experiences}) => (
    // Elements in the Vertical Line '#1d1836'
    <VerticalTimelineElement
        
        contentStyle={{background: experiences.textBgColor, color: "#fff"}}
        contentArrowStyle={{borderRight: '7px solid #FEFEFE'}}
        date={experiences.date}
        iconStyle={{background: experiences.iconBg}}
        // icon={
        //     <div className='flex justify-center items-center w-full h-full'>
        //         <img
        //             src={experiences.icon}
        //             alt={experiences.company_name}
        //             className='w-[60%] h-[60%] object-constant'
        //         />
        //     </div>
            
        // }
        
    >
        {/* Title of each Projects */}
        <div>
            <h3 
                className='text-white text-[24px] font-bold'>{experiences.title}
            </h3>
            <p
                className='text-secondary text-[24px] font-semibold'
                style={{ margin: 0 }}
            >
                {experiences.tech}
            </p>
        </div>
        {/*  */}
        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experiences.points.map((point, index) => (
                <li key={`experiences-points-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);

const Projects = () => {
  return (
    <> 
        {/* Heading with textVariant for animation */}
        <motion.div variants={textVariant()}>
            {/* <p className={styles.sectionSubText}>What I have done</p> */}
            <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>

        {/* React Timeline */}
        <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
                {/* Map each experieces to a ProjectCard */}
                {experiences.map((experiences, index) => (
                    <ProjectsCard key={index} experiences={experiences}/>
                ))}
            </VerticalTimeline>
        </div>
    </>
  )
}

export default SectionWrapper(Projects, "project")