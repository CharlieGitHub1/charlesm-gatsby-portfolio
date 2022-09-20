import React from "react"
import { motion } from "framer-motion"
import {
    LandingContainer,
    LandingBg,
    LandingContent,
    LandingItems,
    LandingP,
    LandingVideoBg,
    container,
    listItem,
    AnimatedGradient,
    } from "../styles/landing_page_styles/HeroVidBgStyles"


const Landing = () => {
    // const [slideIndex, setSlideIndex] = useState(0)
    // const length = slides.length
    // const timeout = useRef(null)

    // useEffect(() => {
    //   timeout.current = setTimeout(() => {
    //     if (slideIndex < length - 1) {
    //       setSlideIndex(slideIndex + 1)
    //     } else {
    //       setSlideIndex(0)
    //     }
    //   }, 10000)
    // }, [slideIndex, length])

    // if (!Array.isArray(slides) || slides.length <= 0) {
    //   return null
    // }

    return (
      <LandingContainer>
        <LandingBg>
            <LandingVideoBg
                src="/video.mp4"
                type="video/mp4"
                autoPlay
                loop
                muted
                playsInline
                />

        </LandingBg>
          {/* {slides.map((slide, index) => {
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
          })} */}
        <LandingContent>
          <LandingItems>
            <motion.div variants={container} initial="hidden" animate="show">
              <AnimatedGradient variants={listItem}>
                <img
                  src="/lg-charlesM.svg"
                  alt="logo"
                  style={{
                    maxWidth: "100%",
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