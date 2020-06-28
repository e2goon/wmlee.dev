import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rgba } from "polished"

import GlobalStyle from "../styles/global"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Frame>
      <GlobalStyle />
      <Header title={data.site.siteMetadata.title} />
      <Page>{children}</Page>
      <Footer />
    </Frame>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #d7dae8;
  height: 100vh;
`

const Page = styled.main`
  position: relative;
  min-width: 480px;
  max-height: 100%;
  background: #fff;
  box-shadow: 15px 30px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid ${rgba("#d7dae8", 0.2)};
  border-radius: 12px;
  overflow: auto;
`
