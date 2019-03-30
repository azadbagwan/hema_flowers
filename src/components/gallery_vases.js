import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const SINGLE_IMAGES = graphql`
  query {
    img1: file(relativePath: { eq: "vase_1.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "vase_2.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "vase_3.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "vase_4.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "vase_5.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "vase_6.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "vase_7.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "vase_8.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "vase_9.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "vase_10.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11: file(relativePath: { eq: "vase_11.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img12: file(relativePath: { eq: "vase_12.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img13: file(relativePath: { eq: "vase_13.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img14: file(relativePath: { eq: "vase_14.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img15: file(relativePath: { eq: "vase_15.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img16: file(relativePath: { eq: "vase_16.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img17: file(relativePath: { eq: "vase_17.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img18: file(relativePath: { eq: "vase_18.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img19: file(relativePath: { eq: "vase_19.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img20: file(relativePath: { eq: "vase_20.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img21: file(relativePath: { eq: "vase_21.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img22: file(relativePath: { eq: "vase_22.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img23: file(relativePath: { eq: "vase_23.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img24: file(relativePath: { eq: "vase_24.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img25: file(relativePath: { eq: "vase_25.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img26: file(relativePath: { eq: "vase_26.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img27: file(relativePath: { eq: "vase_27.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img28: file(relativePath: { eq: "vase_28.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img29: file(relativePath: { eq: "vase_29.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default function gallery_vases() {
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
        const img14 = data.img14.childImageSharp.fluid
        const img15 = data.img15.childImageSharp.fluid
        const img16 = data.img16.childImageSharp.fluid
        const img17 = data.img17.childImageSharp.fluid
        const img18 = data.img18.childImageSharp.fluid
        const img19 = data.img19.childImageSharp.fluid
        const img20 = data.img20.childImageSharp.fluid
        const img21 = data.img21.childImageSharp.fluid
        const img22 = data.img22.childImageSharp.fluid
        const img23 = data.img23.childImageSharp.fluid
        const img24 = data.img24.childImageSharp.fluid
        const img25 = data.img25.childImageSharp.fluid
        const img26 = data.img26.childImageSharp.fluid
        const img27 = data.img27.childImageSharp.fluid
        const img28 = data.img28.childImageSharp.fluid
        const img29 = data.img29.childImageSharp.fluid

        return (
          <div>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-4">
                <Img fluid={img4} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-5">
                <Img fluid={img5} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-6">
                <Img fluid={img6} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-7">
                <Img fluid={img7} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-8">
                <Img fluid={img8} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-9">
                <Img fluid={img9} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-10">
                <Img fluid={img10} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-11">
                <Img fluid={img11} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-12">
                <Img fluid={img12} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-13">
                <Img fluid={img13} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-14">
                <Img fluid={img14} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-15">
                <Img fluid={img13} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-13">
                <Img fluid={img15} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-16">
                <Img fluid={img16} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-17">
                <Img fluid={img17} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-18">
                <Img fluid={img18} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-19">
                <Img fluid={img19} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-20">
                <Img fluid={img20} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-21">
                <Img fluid={img21} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-22">
                <Img fluid={img23} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-24">
                <Img fluid={img24} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-25">
                <Img fluid={img25} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-26">
                <Img fluid={img26} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-27">
                <Img fluid={img27} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-28">
                <Img fluid={img28} />
                <p className="info">Vase</p>
              </div>
              <div className="item item-29">
                <Img fluid={img29} />
                <p className="info">Vase</p>
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
    background: white;
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
