import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"
import { Button } from "./Button"
import { keyframes } from "styled-components"
import sanityClient from "@sanity/client"


// framer motion stagger children animation to stagger the children text and button.

// const container = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.05,
//       delayChildren: 0.25,
//       duration: 0.75,
//       ease: "easeOut",
//     },
//   },
// }

// const listItem = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// }

const DesignContainer = styled.div`
  min-height: 100vh;
  padding: 10rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }
`

const DesignHeader = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #fff;

  h1 {
    font-weight: 800;
    font-size: 5rem;
  }
`

const DesignWrap = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  justify-items: center;
  padding: 2rem;
  position: relative;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const DesignCard = styled(motion.div)`
  line-height: 1.4;
  width: 100%;
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
const DesignImage = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 2px;
  filter: brightness(60%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const DesignInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const DesignTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`

const DesignH2 = styled.h2`
  font-size: clamp(1rem, 6vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 800;
  letter-spacing: 5px;
`
const containerVariants = {
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

const AnimatedGradient = styled(motion.h1)`
animation: ${gradient} 10s ease infinite;
background: linear-gradient(to right, #fff 10%, #874ffe 50.15%, #fff 90%);
background-size: 300% 300%;
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
`

const Designs = ({ title }) => {
  const [designProjects, setDesignProjects] = useState(null)

  // useEffect(() => {
  //   sanityClient.fetch(
  //     `*[_type == "designProject"]{
  //     title,
  //     description,
  //     link,
  //     projectType,
  //     tags,
  //     mainImage{
  //       asset->{
  //         _id,
  //         url
  //       },
  //       alt
  //     }
  //   }`
  //   )
  //     .then((data) => setDesignProjects(data))
  //     .catch(console.error)
  // }, [])

  return (
    <DesignContainer>
      <DesignHeader>
        <DesignH2>{title}</DesignH2>
      </DesignHeader>
      <DesignWrap
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {designProjects &&
          designProjects.map((designProject, index) => (
            <DesignCard
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DesignImage
                image={designProject.mainImage.asset.gatsbyImageData}
                alt={designProject.mainImage.alt}
              />
              <DesignInfo>
                <TextWrapper>
                  <DesignTitle>
                    <AnimatedGradient>{designProject.title}</AnimatedGradient>
                  </DesignTitle>
                </TextWrapper>
              </DesignInfo>
              <Button
                to={designProject.link}
                primary="true"
                round="true"
                css={`
                  position: absolute;
                  top: 425px;
                  font-size: 14px;
                `}
              >
                View Project
              </Button>
            </DesignCard>
          ))}
      </DesignWrap>
    </DesignContainer>
  )
}

export default Designs








