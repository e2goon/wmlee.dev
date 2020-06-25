// @flow

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Header = ({ title }) => (
  <StyledHeader>
    <h1>
      <Link to="/">{title}</Link>
    </h1>
  </StyledHeader>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header

const StyledHeader = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@700&display=swap");

  margin: 24px auto;
  font-family: "Sulphur Point", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  h1 {
    margin: 0;
  }
  a {
    text-decoration: none;
    outline: none;
    &:focus,
    &:hover {
      color: #333;
    }
  }
`
