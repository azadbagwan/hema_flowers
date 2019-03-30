import React from "react"
import { styles } from "../utils"
import Link from "gatsby-link"
import styled from "styled-components"
const menu = () => (
  <div className="main-menu">
    <NavWrapper>
      <div
        style={{
          background: "#f4f4f4",
          paddingTop: "5px",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <li>
            <Link to="/stones_gallery" className="nav-link">
              Stones
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              Plants
            </Link>
          </li>
          <li>
            <Link to="/gallery_vase" className="nav-link">
              Vases
            </Link>
          </li>
          <li>
            <Link to="/gallery_grass" className="nav-link">
              Artificial Grass
            </Link>
          </li>
          <li>
            <Link to="/sites_completed" className="nav-link">
              Sites
            </Link>
          </li>
        </ul>
      </div>
    </NavWrapper>
  </div>
)

export default menu
const NavWrapper = styled.nav`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.2rem 2rem 0rem 2rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursoe: pointer;
    ${styles.transitionDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem o.5rem 1.3rem;
    }
  }

  overflow: hidden;
  @media (max-width: 768px) {
    .main-menu {
      padding-top: 100px;
    }
    li {
      list-style-type: none;
    }
    .nav-link {
      display: block;
      text-decoration: none;
      padding: 0.2rem 0.1rem 0rem 0.1rem;
      color: ${styles.colors.mainGrey};
      font-weight: 500;
      text-transform: capitalize;
      cursoe: pointer;
      ${styles.transitionDefault};
      &:hover {
        background: ${styles.colors.mainGrey};
        color: ${styles.colors.mainYellow};
        padding: 0.5rem 1rem o.5rem 1.3rem;
      }
    }
  }
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem o.5rem 1rem;
    }
  }
  overflow: hidden;
  position: relative;
  top: 0;
  width: 100%;

  paddin: 0.5rem 1rem 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.8);
`
