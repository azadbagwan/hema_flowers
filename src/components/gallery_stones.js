import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const SINGLE_IMAGES = graphql`
  query {
    img1: file(relativePath: { eq: "stones1.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "stones2.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "stones3.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "stones4.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "stones5.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "stones6.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "stones7.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "stones8.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "stones9.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "stones10.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11: file(relativePath: { eq: "stones11.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img12: file(relativePath: { eq: "stones12.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img13: file(relativePath: { eq: "stones13.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default function gallery_stones() {
  return (
    <StaticQuery
      query={SINGLE_IMAGES}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        const img4 = data.img4.childImageSharp.fluid
        const img5 = data.img5.childImageSharp.fluid
        const img6 = data.img6.childImageSharp.fluid
        const img7 = data.img7.childImageSharp.fluid
        const img8 = data.img8.childImageSharp.fluid
        const img9 = data.img9.childImageSharp.fluid
        const img10 = data.img10.childImageSharp.fluid
        const img11 = data.img11.childImageSharp.fluid
        const img12 = data.img12.childImageSharp.fluid
        const img13 = data.img13.childImageSharp.fluid
        return (
          <div>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">Site</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">Site</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">Site</p>
              </div>
              <div className="item item-4">
                <Img fluid={img4} />
                <p className="info">Site</p>
              </div>
              <div className="item item-5">
                <Img fluid={img5} />
                <p className="info">Site</p>
              </div>
              <div className="item item-6">
                <Img fluid={img6} />
                <p className="info">Site</p>
              </div>
              <div className="item item-7">
                <Img fluid={img7} />
                <p className="info">Site</p>
              </div>
              <div className="item item-8">
                <Img fluid={img8} />
                <p className="info">Site</p>
              </div>
              <div className="item item-9">
                <Img fluid={img9} />
                <p className="info">Site</p>
              </div>
              <div className="item item-10">
                <Img fluid={img10} />
                <p className="info">Site</p>
              </div>
              <div className="item item-11">
                <Img fluid={img11} />
                <p className="info">Site</p>
              </div>
              <div className="item item-12">
                <Img fluid={img12} />
                <p className="info">Site</p>
              </div>
              <div className="item item-13">
                <Img fluid={img13} />
                <p className="info">Site</p>
              </div>
            </GalleryWrapper>
          </div>
        )
      }}
    />
  )
}
const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: orange;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      width: 300px;
      height: 300px;
    }

    grid-column-gap: 1rem;
  }
`
