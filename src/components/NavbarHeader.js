import React, { Component } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import logo from "../../src/images/flower.png"
import { FaAlignRight } from "react-icons/fa"
export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="Hem flowers" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}
const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: purple;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
