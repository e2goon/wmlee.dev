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
  position: sticky;
  top: 0;
  padding: 24px 0;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "Sulphur Point", sans-serif;
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
