import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { Button } from "./Button"
//view button and back Button

const RepoProject = ({ ImageData, title, description, url }) => (
  <div className="repo-project">
    <h1>{title}</h1>
    <Image image={ImageData} alt={title} />
    <p>{description}</p>
    <Button as="a" href={url} target="_blank" rel="noopener noreferrer">
      View
    </Button>
    <Button as={Link} to="/repo-projects">
      Back
    </Button>
  </div>
)

export default RepoProject
