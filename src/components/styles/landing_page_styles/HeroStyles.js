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

export const HeroSectionStyles = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .container {
    height: 100%;
    width: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
  }
  .hero__wrapper {
    width: 100%;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      background: linear-gradient(291.9deg, #251061 92%, #00ffc2 110.96%),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
      opacity: 0.4;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #030213, #08011c);
      z-index: -1;
    }
    .left {
      width: 50%;
      padding: 50px 0;
      .hero__heading {
        max-width: 450px;
        font-size: 2rem;
        line-height: 1.2;
        font-weight: "700";
        margin: 0.2rem 0;
      }
      .hero__text {
        max-width: 350px;
      }
      .hero__button {
        margin-top: 1.5rem;
      }
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      .hero_video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 80px;
      padding-bottom: 80px;

      &::before {
        background: linear-gradient(300deg, #251061 43.71%, #00ffc2 100.96%),
          linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        opacity: 0.4;
      }

      .left {
        width: 100%;
        padding: 0;
        .hero__heading {
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: "700";
          margin: 0.2rem 0;
        }
        .hero__text {
          max-width: 350px;
        }
        .hero__button {
          margin-top: 1.5rem;
        }
      }
      .right {
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        .hero_video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`
