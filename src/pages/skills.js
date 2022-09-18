import * as React from "react"
import { Link } from "gatsby"
import { Button } from "../components/Button"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SkillPage = () => (
  <Layout>
    <h1>Hi from the Skill page</h1>
    <p>Welcome to page </p>
  <Button primary="true" round="true">
    <Link to="/">Go back to the homepage</Link>
  </Button>

  </Layout>
)

export const Head = () => <Seo title="Skills" />

export default SkillPage