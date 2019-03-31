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
              <form name="contact" method="POST" data-netlify="true">
                <p>
                  <label>
                    Your Name: <input type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    Your Email: <input type="email" name="email" />
                  </label>
                </p>
                <p>
                  <label>
                    Your Role:{" "}
                    <select name="role[]" multiple>
                      <option value="leader">Leader</option>
                      <option value="follower">Follower</option>
                    </select>
                  </label>
                </p>
                <p>
                  <label>
                    Message: <textarea name="message" />
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
