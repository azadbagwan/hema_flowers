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
        <h1> Hema Flowers</h1>
        <div>
          Hema flowers is an exclusive artificial flower store in heart of the
          city, catering to our customers for over 12 years. With the widest
          variety of artificial plants, trees, flower bunches, creepers and
          artificial lawn in Pune and an ever improving hand-picked collection,
          we pride ourselves on our best customer satisfaction through our
          dedicated service. Customized solutions, gifting ideas, turn-key
          projects andon-site installation- we take care of everything for you.
          With Maples, cherry blossoms, Ficus and rubber, Palms and Crotons,
          Gerberas, lilies, primulas and roses among a riot of colours and
          textures you cannot miss to spot our vibrant store in good luck chawk.
          At Hema flowers, as we often hear from our patrons, you will be spoilt
          for choice. Spread over a 800sq feet dedicated exclusively to
          artificial floral products and ancillaries. With over 50 varieties of
          artificial trees and plants and nearly a hundred in flower bunches,
          over 40 varieties of creepers, ferns and grasses we even have over 25
          options in pebbles and chips we endeavor to fulfill your landscaping
          and décor requirements. Looking for that perfect fit for your favorite
          living room corner ? Or the soothing appeal of a bunch of flowers near
          your work desk? Want to liven up your hallway and patio with a
          vertical garden? Our experienced team of dedicated individuals is
          always at hand to help you find just what you’re looking for.
        </div>
      </Layout>
    )
  }
}
