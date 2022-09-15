import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "./Button"

const MotionDesignContainer = styled.div`
  /* background: linear-gradient(180deg, #07060e 85%, #241d57 234.25%); */
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  height: 100%;
  width: 100%;
`

const MainHeader = styled.p`
  padding-left: 2rem;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  color: #fff;
`

const MotionDesignDescription = styled.p`
  padding-left: 2rem;
  margin-bottom: 4rem;
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const MotionDesignContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const MotionDesignFirstColumn = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.4;
  margin-bottom: 5rem;
`

const MotionDesignSecondColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  margin-top: 2rem;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const MotionDesignInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const MotionTextWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const MotionDesignTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`

const MotionDesignImage = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 2px;
  filter: brightness(60%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
    border: none;
    transform: scale(1.1);
    transition: 0.2s ease;
    cursor: pointer;
  }
`

const MotionDesignCard = styled.div`
  line-height: 1.4;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 2px;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 2px;
  }
`

const MotionDesign = () => {
  const data = useStaticQuery(graphql`
    query MotionDesignQuery {
      allMotionDesignJson {
        edges {
          node {
            alt
            button
            name
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  aspectRatio: 1.2
                  transformOptions: { fit: COVER }
                )
              }
            }
          }
        }
      }
    }
  `)

  function getMotionDesign(data) {
    const motionDesignArray = []
    data.allMotionDesignJson.edges.forEach((item, index) => {
      motionDesignArray.push(
        <MotionDesignCard key={index}>
          <MotionDesignImage
            image={getImage(item.node.image.childImageSharp.gatsbyImageData)}
            alt={item.node.alt}
          />
          <MotionDesignInfo>
            <MotionTextWrapper>
              <MotionDesignTitle>{item.node.name}</MotionDesignTitle>
            </MotionTextWrapper>
            <Button
              to="/motion-design"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </MotionDesignInfo>
        </MotionDesignCard>
      )
    })
    return motionDesignArray
  }

  return (
    <MotionDesignContainer>
      <MainHeader>Motion Design Projects</MainHeader>
      <MotionDesignDescription>
        Landing page designs created with Adobe After Effects
      </MotionDesignDescription>
      <MotionDesignContentWrap>
        <MotionDesignFirstColumn>
          <h3>CNC National Catastrophe</h3>
          <p>
            Motion design improves the user experience tremendously and
            effectively by adding animations to any screen. Motion design is not
            only used in phone apps; it is used in computers, tablets,
            smartphones, televisions, and lots more. UX designers use motion
            design to create their prototyping, and experience with it to
            determine whether it is easy to use for an average person, or if it
            needs enhancing.
          </p>
        </MotionDesignFirstColumn>
        <MotionDesignSecondColumn>
          {getMotionDesign(data)}
        </MotionDesignSecondColumn>
      </MotionDesignContentWrap>
    </MotionDesignContainer>
  )
}

export default MotionDesign
