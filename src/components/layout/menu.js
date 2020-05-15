import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <nav id="nav-main">
    <ul className="menu">
      <li><Link activeClassName="active" to="/">Home</Link></li>
    </ul>
  </nav>
)

export default Menu
