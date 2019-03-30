import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery_grass from "../components/gallery_grass.js"
import Menu from "../components/menu"
const GalleryGrass = () => (
  <Layout>
    <SEO title="Page two" />
    <Menu />
    <h1>Sites</h1>
    <Gallery_grass />
    <Link to="/">Go to Index</Link>
  </Layout>
)

export default GalleryGrass
