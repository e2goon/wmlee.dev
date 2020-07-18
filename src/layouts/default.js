import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Helmet from "react-helmet"

import GlobalStyle from "../styles/global"
import Header from "../components/header"
import Footer from "../components/footer"

function DefaultLayout({ children }) {
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
      <Header />
      <Page>{children}</Page>
      <Footer />
    </Frame>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout

const Frame = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const Page = styled.main`
  position: relative;
  width: 100%;
  max-width: 640px;
  max-height: 100%;

  @media (max-width: 768px) {
    max-width: none;
  }
`
