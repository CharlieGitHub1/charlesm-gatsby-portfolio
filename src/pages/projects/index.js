import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import { Link } from "gatsby"
import {
  ProjectContainer,
  ProjectHeader,
  ProjectWrap,
  ProjectCard,
  // ProjectImage,
  ProjectInfo,
  PrjTitle,
  TextWrapper,
  AnimatedGradient,
  containerVariants,
} from "../../components/styles/project_page_styles/ProjectPageStyles"
import {Button } from "../../components/Button"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ProjectPage= ({ id, title, url, description, slug }) => {
  const data = useStaticQuery(graphql`
    query CodingProjectsQuery {
      allCodingJson {
        edges {
          node {
            id
            title
            slug
            url
            description
          }
        }
      }
    }
  `)

  function getCodingPrj(data) {
    const projects = data.allCodingJson.edges
    const prjArray = []
    projects.forEach((item, index) => {
      prjArray.push(
        <Link to={`/projects/${item.node.slug}`} key={index}>
        <ProjectCard
          key={index}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
              <ProjectInfo>
                <TextWrapper>
                <PrjTitle>{item.node.title}</PrjTitle>
                </TextWrapper>
              </ProjectInfo>
        </ProjectCard>
        </Link>
      )
    })
    return prjArray
  }

  return (
    <Layout>
      <Seo title="Projects" />
      <ProjectContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProjectHeader>
          <AnimatedGradient>
            <h2>{title}</h2>
          </AnimatedGradient>
          <p>{description}</p>
        </ProjectHeader>
        <ProjectWrap>{getCodingPrj(data)}</ProjectWrap>
        <Button to={`/${slug}`} primary="true" round="true" big="true">
          Back to Projects
        </Button>
      </ProjectContainer>
    </Layout>
  )
}





export const Head = () => <Seo title="Projects" />

export default ProjectPage
