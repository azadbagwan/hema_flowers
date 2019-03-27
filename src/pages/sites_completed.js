import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery_sites from "../components/gallery_sites.js"
import Menu from "../components/menu"
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Menu />
    <h1>Sites</h1>
    <Gallery_sites />
    <Link to="/">Go to Index</Link>
  </Layout>
)

export default SecondPage
