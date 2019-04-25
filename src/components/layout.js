import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import './bootstrap.min.css';
import "./layout.css"
import Navbar from "./global/Navbar"
import Footer from "./global/Footer"

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
