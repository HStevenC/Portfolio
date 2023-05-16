import React from 'react'
import Spline from '@splinetool/react-spline';
import styled from "styled-components";
import { styles } from "../styles";
import { useMediaQuery } from 'react-responsive';

//https://prod.spline.design/fHSFs1CucN88MZIU/scene.splinecode  main
//https://prod.spline.design/FH6ZGV7c9gXHXIS8/scene.splinecode test
const spline = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 1068 });

  return (
    <>
    {/* Spline 3d Object */}
    <div>
    <Wrapper className={`flex flex-col w-screen h-screen min-h-screen items-center justify-center relative`}> 
        {isSmallDevice ?
          <Spline 
            className='splinesm' 
            scene="https://prod.spline.design/2UDr40IsmI03S33u/scene.splinecode" 
          /> 
          : 
          <Spline
            className='spline'
            scene="https://prod.spline.design/fHSFs1CucN88MZIU/scene.splinecode"
          />
        }
    </Wrapper>
    </div>
    </>
  );
}

const Wrapper = styled.div`



.spline {
  position: absolute;
  //  width: 200%;
  // height: 100%
  // overflow-x: hidden;

  // @media (max-width: 576px){
  //   display: none;
  // }
   
  @media (min-width: 390px){
    transform: scale(0.25) translateX(-1100px);
    
  }
  @media (min-width: 600px){
    transform: scale(0.4) translateX(-1000px);
    
  }
  @media (min-width: 824px){
    transform: scale(0.5) translateX(-850px);
  }
  @media (min-width: 1024px){
    transform: scale(0.6) translateX(-700px);
  }
  @media (min-width: 1224px){
    transform: scale(0.7) translateX(-600px);
  }
  @media (min-width: 1524px){
    transform: scale(0.8) translateX(-500px);
  }
  @media (min-width: 1754px){
    transform: scale(0.9) translateX(-400px);
  }
  @media (min-width: 1954px){
    transform: scale(1) translateX(-300px);
  }
   
}

.splinesm {
  position: absolute;
  //  width: 200%;
  // height: 100%
  // overflow-x: hidden;

  // @media (max-width: 576px){
  //   display: none;
  // }

  //WIDTH

  @media (min-width: 290px){
    transform: scale(.9) translateY(250px);
    
  }
  @media (min-width: 390px){
    transform: scale(1) translateY(250px);
    
  }
  @media (min-width: 500px){
    transform: scale(1.2) translateX(100px)  translateY(150px);
  }
  @media (min-width: 600px){
    transform: scale(1.2) translateX(220px)  translateY(300px);
    
  }
  @media (min-width: 800px){
    transform: scale(1.2) translateX(250px)  translateY(350px);
  }
  @media (min-width: 900px){
    transform: scale(1.5) translateX(300px)  translateY(450px);
  }

// Height

  
}

`;


export default spline