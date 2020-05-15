import React from "react"

import Layout from "../components/index"
import SEO from "../components/other/seo"
import Container from "../components/layout/container";

const DemoPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Demo</h1>
      <p>Demo page</p>
    </Container>
  </Layout>
)

export default DemoPage
