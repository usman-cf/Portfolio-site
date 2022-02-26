import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import "../../../styles/global.css"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query siteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1> {title} </h1>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
