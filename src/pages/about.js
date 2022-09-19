import * as React from "react"
import { Link } from "gatsby"
import { Button } from "../components/Button"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>Hi from the About page</h1>
    <p>Welcome to page 2</p>
  <Button primary="true" round="true">
    <Link to="/">Go back to the homepage</Link>
  </Button>

  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
