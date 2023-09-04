import React from 'react'
import { textVariant } from '../utils/motion';
import {motion} from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import Carousel from 'react-multi-carousel';
import ExperienceCards from './ExperienceCards'

import "react-multi-carousel/lib/styles.css";
import './styles.css';

const Experience = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>What I have done</p> */}
        <h2 className={styles.sectionHeadText} >Experience</h2>
      </motion.div>
      
      {/* <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

      </Carousel>; */}
      <ExperienceCards/>
    </>
  )}

export default SectionWrapper(Experience, "Experience")