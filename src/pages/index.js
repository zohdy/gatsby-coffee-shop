import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import BackgroundSection from "../components/Global/BackgroundSection"
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.background_img.childImageSharp.fluid}
      title="Regular Joe's"
      styleClass="default-background"
    />
    <Info />
    <Menu items={ data.menu } />
    <Products />
    <Contact />
  </Layout>
);

export const query = graphql`
  {
    background_img:file(relativePath:{eq:"default-background.jpeg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width:50, height:50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
