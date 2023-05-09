import React from 'react'
import Spline from '@splinetool/react-spline';
import styled from "styled-components";
import { styles } from "../styles";

const spline = () => {
  return (
    <>
    {/* Spline 3d Object */}
    <div className={`flex w-screen h-screen min-h-screen flex-col items-center justify-center relative`}>
    <Wrapper >
      <Spline
          className='spline'
          scene="https://prod.spline.design/fHSFs1CucN88MZIU/scene.splinecode"     
        />
    </Wrapper>
    </div>
    </>
  );
}

const Wrapper = styled.div`
  // font-size: 16px;
  // text-align: center;
  // color: palevioletred;
  // position: relative;
  
   .spline {
  //   margin-top: 1000px
  //   position: relative;
  //   top: 1000px;
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
    
    @media (max-width: 1624px){
      transform: scale(0.8);
    }
    
    @media (max-width: 1424px){
      transform: scale(0.7);
    }
    
  //   @media (max-width: 1324px){
  //     transform: scale(0.7) translateX(-40%);
  //   }
    @media (max-width: 1224px){
      transform: scale(0.6);
    }
  //   @media (max-width: 1124px){
  //     transform: scale(0.65) translateX(-65%);
  //   }
    @media (max-width: 1024px){
      transform: scale(0.5) 
    }
  //   @media (max-width: 924px){
  //     transform: scale(0.6) translateX(-95%);
  //   }
    @media (max-width: 824px){
      transform: scale(0.4);
    }
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

export default spline