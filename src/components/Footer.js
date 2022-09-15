import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { motion } from "framer-motion"
import {
  SiInstagram,
  SiGithub,
  SiFacebook,
  SiYoutube,
  SiLinkedin,
} from "react-icons/si"

//Footer with four social icons that link to my social media accounts instagram, github, facebook and youtube a navigation link to my resume

// const container = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//       delayChildren: 1,
//       duration: 1,
//       keyframes: [0, 1, 7, 1],
//     },
//   },
// }

// const listItem = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// }

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
    #60ff83 10%,
    #874ffe 50.15%,
    #60ff83 90%
  );
  background-size: 300% 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`

const FooterContainer = styled(motion.div)`
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

const FooterWrap = styled(motion.div)`
  z-index: 3;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`

const FooterLinksContainer = styled(motion.div)`
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

const FooterLinksWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const FooterLinkItems = styled(motion.div)`
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
      color: #01bf71;
      transition: 0.3s ease-out;
    }
  }
`

const FooterLinkTitle = styled(motion.h2)`
  font-size: 14px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

const FooterLink = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

const SocialMedia = styled(motion.section)`
  max-width: 1000px;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`

const SocialMediaWrap = styled(motion.div)`
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

const SocialLogo = styled(motion.a)`
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

const SocialIcons = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const SocialIconLink = styled(motion.a)`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

const WRights = styled(motion.small)`
  color: #fff;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                <AnimatedGradient>CONTACT US</AnimatedGradient>
              </FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
              <FooterLink to="/signin">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                <AnimatedGradient>VIDEOS</AnimatedGradient>
              </FooterLinkTitle>
              <FooterLink to="/signin">Submit Video</FooterLink>
              <FooterLink to="/signin">Ambassadors</FooterLink>
              <FooterLink to="/signin">Agency</FooterLink>
              <FooterLink to="/signin">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                <AnimatedGradient>SOCIAL MEDIA</AnimatedGradient>
              </FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">CHARLES MAYE JR</SocialLogo>
            <WRights>CHARLESMAYE © 2022</WRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <SiFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <SiInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <SiYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="GitHub">
                <SiGithub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <SiLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
