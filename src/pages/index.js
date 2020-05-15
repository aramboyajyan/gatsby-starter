import React from "react"

import { FaCode } from 'react-icons/fa';

import { Link } from 'gatsby';

import Layout from "../components/index"
import SEO from "../components/other/seo"
import Container from "../components/layout/container";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Home</h1>
      <p><FaCode /> <Link to="/demo/">Demo page</Link></p>
    </Container>
  </Layout>
)

export default IndexPage
