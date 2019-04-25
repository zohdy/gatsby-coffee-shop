import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import './bootstrap.min.css';
import "./layout.css"
import Navbar from "./Global/Navbar"
import Footer from "./Global/Footer"

const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    { children }
    <Footer/>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
