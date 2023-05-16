import React from 'react'
import { styles } from "../styles";

const Header = () => {
  return (
    <div className="absolute top-40">
         {/* Text in header and subHeader */}
         <div className='relative'>
          <h1 className={`${styles.heroHeadText} text-white ml-20`}>
            <div className="static-texts">
              Hi, I'm <span className='text-[#08B6F9]'>Steven</span>
            </div>

            <span className='text-[#08B6F9]'>
              <ul className="dynamic-texts">
                {/* <li><span>Steven</span></li> */}
                {/* <li><span>Huan</span></li> */}
              </ul>
            </span>

          </h1>
          
          <p className={`${styles.heroSubText} mt-2 ml-20 text-white-100`}>
            A Computer Engineering Student <br className='sm:block hidden'/>
            
          </p>
        </div>
         {/* ball + gradient line + fading line */}
        <div className='flex flex-col justify-center ml-10 mt-5 relative'>
          <div className='w-5 h-5 rounded-full bg-[#08B6F9]' />
          <div className='flex flex-col neon-gradient ml-2'></div>
          <div className='flex flex-col neonFade-gradient ml-2'></div>
        </div>
        
       
    </div>
  )
}

export default Header