import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FaGulp
} from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <h1>Index page</h1>
      <FaGulp />
    </div>
  </Layout>
)

export default IndexPage
