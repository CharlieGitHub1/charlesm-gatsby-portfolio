import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { motion } from "framer-motion"
import Logo from "../assets/logos/lg-charlesM.svg"
import { StaticImage } from "gatsby-plugin-image"

// import Logo from "../assets/images/new-cm-logo.svg"
// framer motion stagger children animation to stagger the children text and button.

const container = {
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

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
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

const LandingContainer = styled.div`
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
    opacity: 0.9;
  }
`

const LandingBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const LandingImage = styled(StaticImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const LandingContent = styled.div`
  z-index: 3;
  height: calc(100vh - 70px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const LandingItems = styled.div`
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

const LandingP = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  margin-bottom: 2rem;
  font-weight: 700;
  letter-spacing: 15px;
  color: #fff;
`

const Landing = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const length = slides.length
  const timeout = useRef(null)

  useEffect(() => {
    timeout.current = setTimeout(() => {
      if (slideIndex < length - 1) {
        setSlideIndex(slideIndex + 1)
      } else {
        setSlideIndex(0)
      }
    }, 10000)
  }, [slideIndex, length])

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <LandingContainer>
      <LandingBg>
        {slides.map((slide, index) => {
          return (
            <div
              className={index === slideIndex ? "slide active" : "slide"}
              key={index}
            >
              {index === slideIndex && (
                <LandingImage
                  src={slide.image}
                  alt={slide.alt}
                  placeholder="blurred"
                  layout="fullWidth"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              )}
            </div>
          )
        })}
      </LandingBg>
      <LandingContent>
        <LandingItems>
          <motion.div variants={container} initial="hidden" animate="show">
            <AnimatedGradient variants={listItem}>
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: "400px",
                  height: "200px",
                }}
              />
            </AnimatedGradient>
            <motion.div variants={listItem}>
              <LandingP>A Ui/Ux Design Portfolio</LandingP>
            </motion.div>
          </motion.div>
        </LandingItems>
      </LandingContent>
    </LandingContainer>
  )
}

export default Landing