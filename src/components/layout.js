import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GlobalStyle from "../styles/global"
import Helmet from "react-helmet"
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
      <Helmet
        link={[
          {
            href:
              "https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap",
            rel: "stylesheet",
          },
          {
            href:
              "https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@700&display=swap",
            rel: "stylesheet",
          },
          {
            href:
              "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap",
            rel: "stylesheet",
          },
        ]}
      />
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
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const Page = styled.main`
  position: relative;
  width: 100%;
  max-width: 640px;
  max-height: 100%;
`
