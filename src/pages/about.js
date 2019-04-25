import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from 'gatsby'
import BackgroundSection from "../components/global/BackgroundSection"
import Info from "../components/home/info"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.background_img.childImageSharp.fluid}
      title="About us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
);

export const query = graphql`
  {
    background_img:file(relativePath:{eq:"about-background.jpeg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
