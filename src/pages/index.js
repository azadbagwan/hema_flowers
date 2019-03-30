import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
    <GalleryWrapper>
      <div />
      <div className="left-div">
        <Image />
      </div>

      <div className="right-div">
        Hema flowers is an exclusive artificial flower store in heart of the
        city, catering to our customers for over 12 years. With the widest
        variety of artificial plants, trees, flower bunches, creepers and
        artificial lawn in Pune and an ever improving hand-picked collection, we
        pride ourselves on our best customer satisfaction through our dedicated
        service. Customized solutions, gifting ideas, turn-key projects
        andon-site installation- we take care of everything for you. With
        Maples, cherry blossoms, Ficus and rubber, Palms and Crotons, Gerberas,
        lilies, primulas and roses among a riot of colours and textures you
        cannot miss to spot our vibrant store in good luck chawk. At Hema
        flowers, as we often hear from our patrons, you will be spoilt for
        choice.
      </div>
    </GalleryWrapper>
    <div>
      {" "}
      <p>
        Spread over a 800sq feet dedicated exclusively to artificial floral
        products and ancillaries. With over 50 varieties of artificial trees and
        plants and nearly a hundred in flower bunches, over 40 varieties of
        creepers, ferns and grasses we even have over 25 options in pebbles and
        chips we endeavor to fulfill your landscaping and décor requirements.
        Looking for that perfect fit for your favorite living room corner ? Or
        the soothing appeal of a bunch of flowers near your work desk? Want to
        liven up your hallway and patio with a vertical garden? Our experienced
        team of dedicated individuals is always at hand to help you find just
        what you’re looking for. At Hema flowers we pride ourselves in providing
        great customer service.
      </p>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/gallery_1/">Go to gallery</Link>
  </Layout>
)
const GalleryWrapper = styled.div`

@media (min-width: 992px) {
  
  .item{
    display:block;
  position:relative;
  }
  .gatsby-image-wrapper {
    
    width: 300px;
    height: 300px;
  }
  @media (min-width: 762px) {
    display: grid;
grid-template-columns: 1fr 1fr;
.left-div {
  grid-area: one;
}
.left-div {
  grid-area: two;
}
grid-template-areas:
      "one  two"
      "one  two";
    .item{
      display:block;
    position:relative;
    }
    .gatsby-image-wrapper {
      
      width: 300px;
      height: 300px;
    }`
export default IndexPage
