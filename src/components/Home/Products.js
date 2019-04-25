import React from "react";
import Product from './Product';
import Title from '../Global/Title';
import { StaticQuery, graphql } from 'gatsby';

const getProducts = graphql`
  {
    products: allContentfulCoffeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery query={getProducts} render={data => {
      return(
        <section className="py-5">
          <div className="container">
            <Title title="Our Products" />
            <div className="row">
              { data.products.edges.map(({node:product}) => {
                return <Product key={product.id} product={product}/>
              })}
            </div>
          </div>
        </section>
      )
    }} />
  );
}



export default Products