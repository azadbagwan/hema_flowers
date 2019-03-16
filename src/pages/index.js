import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import gallery from "../components/gallery"
const IndexPage = () => (
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
    <div />
    <h1>Hema Flowers</h1>
    <p>
      we been serving high qualityinterior beautifying products for last 11
      years to entire pune at the best cost.
    </p>
    <p>
      At Hema flowers we pride ourselves in providing great customer service.
    </p>
    <div
      className="main-div"
      style={{ maxWidth: "100%", marginBottom: `1.45rem` }}
    >
      <Gallery />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/gallery_1/">Go to gallery</Link>
  </Layout>
)

export default IndexPage
