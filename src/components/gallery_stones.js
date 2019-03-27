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
    img14: file(relativePath: { eq: "stones14.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img15: file(relativePath: { eq: "stones15.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img16: file(relativePath: { eq: "stones16.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img17: file(relativePath: { eq: "stones17.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img18: file(relativePath: { eq: "stones18.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img19: file(relativePath: { eq: "stones19.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img20: file(relativePath: { eq: "stones20.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img21: file(relativePath: { eq: "stones21.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img22: file(relativePath: { eq: "stones22.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img23: file(relativePath: { eq: "stones23.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img24: file(relativePath: { eq: "stones24.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img25: file(relativePath: { eq: "stones25.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img26: file(relativePath: { eq: "stones26.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img27: file(relativePath: { eq: "stones27.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img28: file(relativePath: { eq: "stones28.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img29: file(relativePath: { eq: "stones29.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img30: file(relativePath: { eq: "stones30.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img31: file(relativePath: { eq: "stones31.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img32: file(relativePath: { eq: "stones32.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img33: file(relativePath: { eq: "stones33.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img34: file(relativePath: { eq: "stones34.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img35: file(relativePath: { eq: "stones35.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img36: file(relativePath: { eq: "stones36.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img37: file(relativePath: { eq: "stones37.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img38: file(relativePath: { eq: "stones38.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img39: file(relativePath: { eq: "stones39.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img40: file(relativePath: { eq: "stones40.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img41: file(relativePath: { eq: "stones41.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img42: file(relativePath: { eq: "stones42.png" }) {
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
        const img30 = data.img30.childImageSharp.fluid
        const img31 = data.img31.childImageSharp.fluid
        const img32 = data.img32.childImageSharp.fluid
        const img33 = data.img33.childImageSharp.fluid
        const img34 = data.img34.childImageSharp.fluid
        const img35 = data.img35.childImageSharp.fluid
        const img36 = data.img36.childImageSharp.fluid
        const img37 = data.img37.childImageSharp.fluid
        const img38 = data.img38.childImageSharp.fluid
        const img39 = data.img39.childImageSharp.fluid
        const img40 = data.img40.childImageSharp.fluid
        const img41 = data.img41.childImageSharp.fluid
        const img42 = data.img42.childImageSharp.fluid

        return (
          <div>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">River stone brown</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">River stone mix</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">Unpolished white</p>
              </div>
              <div className="item item-4">
                <Img fluid={img4} />
                <p className="info">Onex light green</p>
              </div>
              <div className="item item-5">
                <Img fluid={img5} />
                <p className="info">Onex manik</p>
              </div>
              <div className="item item-6">
                <Img fluid={img6} />
                <p className="info">Super black M</p>
              </div>
              <div className="item item-7">
                <Img fluid={img7} />
                <p className="info">Onex purple</p>
              </div>
              <div className="item item-8">
                <Img fluid={img8} />
                <p className="info">Aquerium /color</p>
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
              <div className="item item-14">
                <Img fluid={img14} />
                <p className="info">Site</p>
              </div>
              <div className="item item-15">
                <Img fluid={img13} />
                <p className="info">Site</p>
              </div>
              <div className="item item-13">
                <Img fluid={img15} />
                <p className="info">Site</p>
              </div>
              <div className="item item-16">
                <Img fluid={img16} />
                <p className="info">Site</p>
              </div>
              <div className="item item-17">
                <Img fluid={img17} />
                <p className="info">Site</p>
              </div>
              <div className="item item-18">
                <Img fluid={img18} />
                <p className="info">Site</p>
              </div>
              <div className="item item-19">
                <Img fluid={img19} />
                <p className="info">Site</p>
              </div>
              <div className="item item-20">
                <Img fluid={img20} />
                <p className="info">Site</p>
              </div>
              <div className="item item-21">
                <Img fluid={img21} />
                <p className="info">Site</p>
              </div>
              <div className="item item-22">
                <Img fluid={img23} />
                <p className="info">Site</p>
              </div>
              <div className="item item-24">
                <Img fluid={img24} />
                <p className="info">Site</p>
              </div>
              <div className="item item-25">
                <Img fluid={img25} />
                <p className="info">Site</p>
              </div>
              <div className="item item-26">
                <Img fluid={img26} />
                <p className="info">Site</p>
              </div>
              <div className="item item-27">
                <Img fluid={img27} />
                <p className="info">Site</p>
              </div>
              <div className="item item-28">
                <Img fluid={img28} />
                <p className="info">Site</p>
              </div>
              <div className="item item-29">
                <Img fluid={img29} />
                <p className="info">Site</p>
              </div>
              <div className="item item-30">
                <Img fluid={img30} />
                <p className="info">Site</p>
              </div>
              <div className="item item-31">
                <Img fluid={img31} />
                <p className="info">Site</p>
              </div>
              <div className="item item-32">
                <Img fluid={img32} />
                <p className="info">Site</p>
              </div>
              <div className="item item-33">
                <Img fluid={img33} />
                <p className="info">Site</p>
              </div>
              <div className="item item-34">
                <Img fluid={img34} />
                <p className="info">Site</p>
              </div>
              <div className="item item-35">
                <Img fluid={img35} />
                <p className="info">Site</p>
              </div>
              <div className="item item-36">
                <Img fluid={img36} />
                <p className="info">Site</p>
              </div>
              <div className="item item-37">
                <Img fluid={img37} />
                <p className="info">Site</p>
              </div>
              <div className="item item-38">
                <Img fluid={img38} />
                <p className="info">Site</p>
              </div>
              <div className="item item-39">
                <Img fluid={img39} />
                <p className="info">Site</p>
              </div>
              <div className="item item-40">
                <Img fluid={img40} />
                <p className="info">Site</p>
              </div>
              <div className="item item-41">
                <Img fluid={img41} />
                <p className="info">Site</p>
              </div>
              <div className="item item-42">
                <Img fluid={img42} />
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
