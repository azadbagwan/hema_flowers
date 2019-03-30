import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery_vases from "../components/gallery_vases.js"
import Menu from "../components/menu"
const GalleryVase = () => (
  <Layout>
    <SEO title="Page two" />
    <Menu />
    <h1>Vases</h1>
    <Gallery_vases />
    <Link to="/">Go to Index</Link>
  </Layout>
)

export default GalleryVase
