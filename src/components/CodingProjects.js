import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import { keyframes } from "styled-components"
import { Button } from "./Button"

const PrjContainer = styled.div`
  padding: 10rem;
  color: #fff;
  min-height: 100vh;
`

const PrjHeader = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #fff;

  h1 {
    font-weight: 800;
    font-size: 5rem;
  }
`

const PrjWrap = styled(motion.div)`
  display: grid;
  grid-gap: 30px;
  justify-items: center;
  padding: 2rem;
  position: relative;

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const PrjCard = styled(motion.div)`
  line-height: 1.4;
  width: 100%;
  height: 500px;

  position: relative;
  border-radius: 4px;
  border: 1px solid #fff;
  transition: 0.2s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    box-shadow: 0px 6px 12px 4px rgba(255, 255, 255, 0.5);
    border: 4px solid #fff;
    border-radius: 4px;
    transform: scale(1.1);
    transition: 0.2s ease;
    cursor: pointer;
  }
`
const PrjImage = styled(GatsbyImage)`
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

const LinkStyle = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fff;
`

const PrjInfo = styled.div`
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

const PrjTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
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

const CodingProjects = ({ title, description, slug, image }) => {
  const data = useStaticQuery(graphql`
    query CodingProjectsQuery {
      allCodingJson {
        edges {
          node {
            title
            slug
            url
            description
            image {
              childrenImageSharp {
                gatsbyImageData(
                  width: 500
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  function getCodingPrj(data) {
    const codingPrjArray = []
    data.allCodingJson.edges.forEach((item, index) => {
      codingPrjArray.push(
        <LinkStyle to={`/coding-projects/${item.node.slug}`}>
          <PrjCard
            key={index}
            whileHover={{ scale: 1.05 }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <PrjImage
              image={item.node.image.childrenImageSharp.gatsbyImageData}
              alt={item.node.title}
            />
            <PrjInfo>
              <TextWrapper>
                <PrjTitle>{item.node.title}</PrjTitle>
              </TextWrapper>
            </PrjInfo>
          </PrjCard>
        </LinkStyle>
      )
    })
    return codingPrjArray
  }

  return (
    <PrjContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PrjHeader>
        <AnimatedGradient>
          <h2>{title}</h2>
        </AnimatedGradient>
        <p>{description}</p>
      </PrjHeader>
      <PrjWrap>{getCodingPrj(data)}</PrjWrap>
      <Button
        to={`/${slug}/`}
        primary="true"
        round="true"
        css={`
          position: relative;
          top: 90%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1rem;
        `}
      >
        View All
      </Button>
    </PrjContainer>
  )
}

export default CodingProjects
