import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const SINGLE_IMAGES = graphql`
  query {
    img1: file(relativePath: { eq: "site_completed10.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default function image() {
  return (
    <StaticQuery
      query={SINGLE_IMAGES}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid

        return (
          <div>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info" />
              </div>
            </GalleryWrapper>
          </div>
        )
      }}
    />
  )
}
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
    .item{
      display:block;
    position:relative;
    }
    .gatsby-image-wrapper {
      
      width: 300px;
      height: 300px;
    }`
