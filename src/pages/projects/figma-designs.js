import * as React from "react"
import { Link } from "gatsby"
import { Button } from "../../components/Button"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const FigmaDesignPage = () => (
  <Layout>
    <h1>Figma Design Page</h1>
    <p>Welcome to page </p>
  <Button primary="true" round="true">
    <Link to="/">Go back to the homepage</Link>
  </Button>

  </Layout>
)

export const Head = () => <Seo title="Figma Designs" />

export default FigmaDesignPage