import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
const SecondPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `flowers`,
        `artificial flowers`,
        `lawn`,
        "artificial lawn",
        "vases",
        "planters",
      ]}
    />
    <h1>Gallery</h1>
    <Gallery />

    <Link to="/">Go to Index</Link>
  </Layout>
)

export default SecondPage
