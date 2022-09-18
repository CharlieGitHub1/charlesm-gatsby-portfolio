import styled from "styled-components"
import { keyframes } from "styled-components"
import { motion } from "framer-motion"


//Footer with four social icons that link to my social media accounts instagram, github, facebook and youtube a navigation link to my resume

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

export const FooterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
  color: #fff;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

export const FooterWrap = styled(motion.div)`
  z-index: 999;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: wrap;
  }
`

export const FooterLinksContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
  z-index: 3;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const FooterLinksWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const FooterLinkItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }

  h1 {
    font-size: 14px;
    margin-bottom: 16px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #fff;
    transition: 0.3s ease-out;
    align-items: center;
    display: flex;
    justify-content: center;

    &:hover {
      color: #00ffc2;
      transition: 0.3s ease-out;
    }
  }
`

export const FooterLinkTitle = styled(motion.h2)`
  font-size: 14px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

export const FooterLink = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #00ffc2;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

export const SocialMedia = styled(motion.section)`
  max-width: 1000px;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`

export const SocialMediaWrap = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  z-index: 3;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(motion.a)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

export const SocialIcons = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

export const SocialIconLink = styled(motion.a)`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #00ffc2;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

export const WRights = styled(motion.small)`
  color: #fff;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`