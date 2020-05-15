import React from "react"

import { FaHome } from 'react-icons/fa';

import Layout from "../components/index"
import SEO from "../components/other/seo"
import Container from "../components/layout/container";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Home</h1>
      <p><FaHome /> Placeholder</p>
    </Container>
  </Layout>
)

export default IndexPage
