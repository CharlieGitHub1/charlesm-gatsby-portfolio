import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FigmaDesignPage = () => (
  <Layout>
    <h1>Hi from the Figma design page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Figma Design Page" />

export default FigmaDesignPage
