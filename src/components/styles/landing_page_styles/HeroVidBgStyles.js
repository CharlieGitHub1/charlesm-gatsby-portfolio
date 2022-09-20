import styled from "styled-components"
import { keyframes } from "styled-components"
import { motion } from "framer-motion"




export const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1,
        duration: 1,
        keyframes: [0, 1, 7, 1],
      },
    },
  }

  export const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  export const gradient = keyframes`
      0% {
        background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `

  export const AnimatedGradient = styled(motion.h1)`
    animation: ${gradient} 10s ease infinite;
    background: linear-gradient(
      to right,
      #00ffc2 10%,
      #874ffe 50.15%,
      #00ffc2 90%
    );
    background-size: 300% 300%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  `

  export const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -70px;
    color: #fff;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      background: linear-gradient(300deg, #251061 26%, #00ffc2 117%),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
      opacity: 0.72;
    }
  `

  export const LandingBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `

  export const LandingVideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  `

  export const LandingContent = styled.div`
    z-index: 3;
    height: calc(100vh - 70px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
  `

  export const LandingItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
  `

  // const LandingH1 = styled(motion.h1)`
  //   font-size: clamp(2.5rem, 10vw, 4rem);
  //   font-weight: 800;
  //   margin-bottom: 1.5rem;
  //   letter-spacing: 4px;
  //   padding: 0 1rem;
  // `

  export const LandingP = styled.p`
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 2rem;
    padding: 50px;
    font-weight: 500;
    letter-spacing: 20px;
    color: #fff;
  `