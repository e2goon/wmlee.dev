import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
      <Page>
        <div className="inner">
          <main>{children}</main>
        </div>
      </Page>
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
  justify-content: center;
  background: #d7dae8;
  height: 100vh;
`

const Page = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  max-height: 100%;
  border: 3px solid #000;
  border-radius: 12px;
  background: #fff;
  box-shadow: 15px 30px 60px rgba(0, 0, 0, 0.2);
  overflow: auto;
  > .inner {
    padding: 24px;
  }
`
