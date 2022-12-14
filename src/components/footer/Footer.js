import React from "react"
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIconLink,
  WRights,
  SocialIcons,
  AnimatedGradient,
} from "../styles/footer_styles/FooterStyles"

import {
  SiInstagram,
  SiGithub,
  SiFacebook,
  SiYoutube,
  SiLinkedin,
} from "react-icons/si"




const Footer = () => {

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                <AnimatedGradient>CONTACT Me</AnimatedGradient>
              </FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Gmail</FooterLink>
              <FooterLink to="/signin">LinkedIn</FooterLink>
              <FooterLink to="/signin">Instagram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                <AnimatedGradient>VIDEOS</AnimatedGradient>
              </FooterLinkTitle>
              <FooterLink to="/signin">Submit Video</FooterLink>
              <FooterLink to="/signin">Label</FooterLink>
              <FooterLink to="/signin">Label</FooterLink>
              <FooterLink to="/signin">Label</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                <AnimatedGradient>SOCIAL MEDIA</AnimatedGradient>
              </FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Snapchat</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">CHARLES MAYE JR</SocialLogo>
            <WRights>CHARLESMAYE ?? 2022</WRights>
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
