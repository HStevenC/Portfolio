//import { motion } from "framer-motion";

import Spline from '@splinetool/react-spline';
import styled from "styled-components";
import { styles } from "../styles";
//import { ComputersCanvas } from "./canvas";



//relative w-full h-screen mx-auto | flex w-screen h-screen min-h-screen flex-col items-center justify-center relative
const Hero = () => {
  return (
    <div className={`flex w-screen h-screen min-h-screen flex-col items-center justify-center relative`}>

        {/* Heading position */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl ml-12 mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
        {/* ball + gradient line + fading line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#08B6F9]' />
          <div className='flex flex-col justify-center neon-gradient'></div>
          <div className='flex flex-col justify-center neonFade-gradient'></div>
        </div>
        
        {/* Text in header and subHeader */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#08B6F9]'>Steven</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

     

      {/* Spline 3d Object */}
      <Wrapper>
        <Spline
            className='spline'
            scene="https://prod.spline.design/fHSFs1CucN88MZIU/scene.splinecode"     
          />
      </Wrapper>
      
      {/* quick scroll */}
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </div>
  );
};

const Wrapper = styled.div`
  // font-size: 16px;
  // text-align: center;
  // color: palevioletred;
     position: relative;
  
   .spline {
      margin-top: 1000px
      // position: relative;
  //   top: 450px;
  //   margin-top: 200px;
  //   z-index:100;

  //   @media (max-width: 2024px){
  //     transform: scale(1) translateX(-5%);
  //     right:auto;
  //     left:50%
  //     margin-left: -50vw
  //   }
  //   @media (max-width: 1824px){
  //     transform: scale(0.9) translateX(-10%);
  //   }
    
  //   @media (max-width: 1824px){
  //     transform: scale(0.9) translateX(-15%);
  //   }
    
  //   @media (max-width: 1624px){
  //     transform: scale(0.8) translateX(-30%);
  //   }
    
  //   @media (max-width: 1424px){
  //     transform: scale(0.8) translateX(-35%);
  //   }
    
  //   @media (max-width: 1324px){
  //     transform: scale(0.7) translateX(-40%);
  //   }
  //   @media (max-width: 1224px){
  //     transform: scale(0.7) translateX(-50%);
  //   }
  //   @media (max-width: 1124px){
  //     transform: scale(0.65) translateX(-65%);
  //   }
  //   @media (max-width: 1024px){
  //     transform: scale(0.6) translateX(-80%);
  //   }
  //   @media (max-width: 924px){
  //     transform: scale(0.6) translateX(-95%);
  //   }
  //   @media (max-width: 824px){
  //     transform: scale(0.5);
  //     margin-left: -60vw;
  //   }
  //   @media (max-width: 724px){
  //     transform: scale(0.4);
  //     margin-left: -65vw;
  //   }
  //   @media (max-width: 624px){
  //     transform: scale(0.4);
  //     margin-left: -75vw;
  //   }
  //   @media (max-width: 575px){
  //     transform: scale(0.4);
  //     margin-left: -85vw;
  //   }
  //   @media (max-width: 424px){
  //     transform: scale(0.3);
  //     margin-left: -110vw;
  //   }
  }

  
`;

export default Hero;