import * as React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact_form/Contact"
import Footer from "../components/footer/Footer"


import HeroVidBg from "../components/landing/HeroVidBg"

import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HeroVidBg />
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
