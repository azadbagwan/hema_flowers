import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery_stones from "../components/gallery_stones.js"
import Menu from "../components/menu"
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Menu />
    <h1>Sites</h1>
    <Gallery_stones />
    <Link to="/">Go to Index</Link>
  </Layout>
)

export default SecondPage
