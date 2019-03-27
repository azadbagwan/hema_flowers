import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import Menu from "../components/menu"
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Menu />
    <h1>Gallery</h1>
    <Gallery />

    <Link to="/">Go to Index</Link>
  </Layout>
)

export default SecondPage
