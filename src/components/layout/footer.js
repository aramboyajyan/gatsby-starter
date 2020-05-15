import React from "react"

import Container from "./container"

const Footer = () => (
  <>
    <Container id="footer-main-wrap">
      This is the footer
    </Container>
    <Container id="footer-copyrights-wrap">
      &copy; { (new Date().getFullYear()) } Project Name
    </Container>
  </>
)

export default Footer
