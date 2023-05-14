//import { motion } from "framer-motion";
import { styles } from "../styles";
//import { ComputersCanvas } from "./canvas";



//relative w-full h-screen mx-auto | flex w-screen h-screen min-h-screen flex-col items-center justify-center relative
const Hero = () => {
  return (
    <div >

        {/* Hero position */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl ml-12 mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
        {/* ball + gradient line + fading line */}
        <div className='flex flex-col justify-center items-center mt-5 relative'>
          <div className='w-5 h-5 rounded-full bg-[#08B6F9]' />
          <div className='flex flex-col neon-gradient'></div>
          <div className='flex flex-col neonFade-gradient'></div>
        </div>
        
        {/* Text in header and subHeader */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <div className="static-texts">
              Hi, I'm <span className='text-[#08B6F9]' >Steven</span>
            </div>

            <span className='text-[#08B6F9]'>
              <ul className="dynamic-texts">
                {/* <li><span>Steven</span></li> */}
                {/* <li><span>Huan</span></li> */}
              </ul>
            </span>

          </h1>
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Computer Engineering Student <br className='sm:block hidden'/>
            
          </p>
        </div>
      </div>

      
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



export default Hero;