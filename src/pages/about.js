import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import BackgroundSection from "../components/Global/BackgroundSection"
import Info from "../components/Home/Info"

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
