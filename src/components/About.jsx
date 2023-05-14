import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

// const ServiceCard = ({index, title, icon}) => {
//   return (
//     <Tilt className='xs:w:[250] '>
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className='w-full green-pink-gradient p-[3px] rounded-[20px] shadow-card'
//       >
//         <div 
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450
//           }}
//           className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//         >
//           <img
//             src={icon}
//             alt={title}
//             className='w-16 h-16 object-contain'
//           />
//           <h3 className='text-white text-[20px] font-bold text-center'>
//             {title}
//           </h3>
//         </div>
//       </motion.div>

//     </Tilt>
//   );
// };

const About = () => {
  return (
    <>
  
      {/* Header, its animation and styles */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* p and its animation and styles */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a senior Computer Engineering student at California State Polytechnic University, Pomona, I embody a hands-on approach to learning, with a strong emphasis on practical program development and hands-on experimentation with electronic components. Through actively building real-world applications and exploring the intricacies of hardware, I have cultivated my skills in creating innovative solutions and adeptly problem-solving within the dynamic field of computer engineering.

      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div> */}
 
    </>
  );
};

export default SectionWrapper(About, "about")