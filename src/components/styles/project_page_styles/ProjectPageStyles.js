import styled from "styled-components"
import { motion } from "framer-motion"
import { keyframes } from "styled-components"
import { Button } from "../../Button"
import { GatsbyImage } from "gatsby-plugin-image"

export const ProjectContainer = styled.div`
  padding: 10rem;
  color: #fff;
  min-height: 100vh;
`

export const ProjectHeader = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #fff;

  h1 {
    font-weight: 800;
    font-size: 5rem;
  }
`

export const ProjectWrap = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  justify-items: center;
  padding: 2rem;


  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled(motion.div)`
  line-height: 1.4;
  width: 300px;
  height: 500px;
  position: relative;
  border-radius: 4px;
  border: 2px solid #fff;
  transition: 0.2s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    box-shadow: 0px 6px 12px 4px rgba(255, 255, 255, 0.5);
    border: 2px solid #00ffc2;
    border-radius: 4px;
    transform: scale(1.1);
    transition: 0.2s ease;
    cursor: pointer;
  }
`
export const ProjectImage = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 2px;
  filter: brightness(60%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

export const PrjTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`

export const ProjectH2 = styled.h2`
  font-size: clamp(1rem, 6vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 800;
  letter-spacing: 5px;
`

export const ProjectP = styled.p`
    font-size: clamp(1rem, 6vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 400;
    letter-spacing: 5px;
    `
export const  ProjectButton = styled(Button)`
    position: absolute;
    top: 420px;
    font-size: 14px;
    padding: 10px 22px;
    border-radius: 50px;
    transition: 0.2s ease-out;
    background: #00ffc2;
    color: #010606;
    border: 2px solid #00ffc2;

    &:hover {
        background: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #010606;
    }
`

export const containerVariants = {
    hidden: { x: -1500 },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      },
    },
  }



  const gradient = keyframes`
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
    background: linear-gradient(to right, #fff 10%, #874ffe 50.15%, #fff 90%);
    background-size: 300% 300%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  `