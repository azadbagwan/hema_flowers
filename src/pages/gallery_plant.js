import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery_plant from "../components/gallery_plants.js"
import Menu from "../components/menu"
const GalleryPlant = () => (
  <Layout>
    <SEO title="Page two" />
    <Menu />
    <h1>Plants</h1>
    <Gallery_plant />
    <Link to="/">Go to Index</Link>
  </Layout>
)

export default GalleryPlant
