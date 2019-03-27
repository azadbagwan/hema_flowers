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
        <Link to="/">Stones</Link>
      </li>
      <li>
        <Link to="/about">Plants</Link>
      </li>
      <li>
        <Link to="/gallery_1">Planters</Link>
      </li>
      <li>
        <Link to="/gallery_1">Artificial Grass</Link>
      </li>
      <li>
        <Link to="/sites_completed">Sites</Link>
      </li>
    </ul>
  </div>
)

export default menu
