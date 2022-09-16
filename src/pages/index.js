import * as React from "react"
import Layout from "../components/layout"
import Landing from "../components/LandingSection"
import Designs from "../components/Designs"
import MotionDesign from "../components/MotionDesign"
import ContactForm from "../components/Contact"
import Footer from "../components/Footer"
import CodingProjects from "../components/CodingProjects"
import { slData } from "../data/SliderData"

import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Landing slides={slData} />
      <Designs title="Designs" />
      <CodingProjects title="Coding Projects" />
      <MotionDesign title="Motion Design" />
      <ContactForm />
      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
