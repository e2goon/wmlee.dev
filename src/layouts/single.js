import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Helmet from "react-helmet"

import GlobalStyle from "../styles/global"

function SingleLayout({ children }) {
  return (
    <Frame>
      <GlobalStyle backgroundColor="#fff" />
      <Helmet
        link={[
          {
            href:
              "https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap",
            rel: "stylesheet",
          },
        ]}
      />
      <Page>{children}</Page>
    </Frame>
  )
}

SingleLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SingleLayout

const Frame = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Page = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 640px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`
