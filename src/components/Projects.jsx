import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BrowserRouter, Route, Routes, Link  } from "react-router-dom";
import { About } from "./";
import {motion} from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { projects } from '../constants';
import './styles.css';

const ProjectsCard = ({projects}) => (
    // Elements in the Vertical Line '#1d1836'
    <VerticalTimelineElement
        
        contentStyle={{background: projects.textBgColor, color: "#fff"}}
        contentArrowStyle={{borderRight: '7px solid #FEFEFE'}}
        date={projects.date}
        iconStyle={{background: projects.iconBg}}
        // icon={
        //     <div className='flex justify-center items-center w-full h-full'>
        //         <img
        //             src={projects.icon}
        //             alt={projects.company_name}
        //             className='w-[60%] h-[60%] object-constant'
        //         />
        //     </div>
            
        // }
        
    >
        {/* Title of each Projects */}
        <div>
            <h3 
                className='text-white text-[24px] font-bold'>{projects.title}
            </h3>
            <p
                className='text-secondary text-[24px] font-semibold'
                style={{ margin: 0 }}
            >
                {projects.tech}
            </p>
        </div>
        {/*  */}
        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {projects.points.map((point, index) => (
                <li key={`projects-points-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
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
                {projects.slice(0, 5).map((projects, index) => (
                    <ProjectsCard key={index} projects={projects}/>
                ))}
              
            </VerticalTimeline>
        </div>
        <Link to="/projects" className='custom-link' >Show More</Link>
    </>
    )
}

export default SectionWrapper(Projects, "project")