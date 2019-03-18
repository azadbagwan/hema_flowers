import React from "react"

import Link from "gatsby-link"
import styled from "styled-components"
const menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px",
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
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/gallery_1">Gallery</Link>
      </li>
    </ul>
  </div>
)

export default menu
