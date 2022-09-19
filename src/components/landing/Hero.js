import React from "react"
import { motion } from "framer-motion"

import { Button } from "../Button"
import { HeroSectionStyles } from "../styles/landing_page_styles/HeroStyles"









const Hero = () => {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              src="/lg-charlesM.svg"
              alt="logo"
              style={{
                paddingBottom: "3rem",
                width: "100%",
                height: "auto",
                maxWidth: "500px",
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="hero__text"
            >
             <h5>A UI/UX Designer & Front-End Developer</h5>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.5 }}
              className="hero__button"
            >
              <Button
                to="contact"
                primary="true"
                round="true"
                css={`
                  max-width: 160px;
                `}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
          <div className="right">
            <video
              className="hero_video"
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  )
}

export default Hero
