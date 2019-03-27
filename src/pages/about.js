import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
export default class about extends Component {
  render() {
    return (
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
        <h1> This is about us</h1>
      </Layout>
    )
  }
}
