import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default class contactus extends Component {
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
        <div>
          <GalleryWrapper>
            <div className="container">
              <h1>Contact Us</h1>
              <form className="contact" netlify>
                <p>
                  <label>
                    Name <input type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    Email <input type="email" name="email" />
                  </label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          </GalleryWrapper>
        </div>
      </Layout>
    )
  }
}

const GalleryWrapper = styled.div`
  .container {
    padding: 2rem 2rem 2rem 2rem;
    border-radius: 5px;
    background: orange;
    width: 50%;
  }
`
