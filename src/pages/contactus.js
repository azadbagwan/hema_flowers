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
          <formWrapper>
            <div className="container">
              <h1>Contact Us</h1>
              <form name="contact" netlify>
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
          </formWrapper>
        </div>
      </Layout>
    )
  }
}

const formWrapper = styled.div`
  .container {
    border-radius: 5px;
    background: #ffa500;
    padding: 20px;
  }
`
