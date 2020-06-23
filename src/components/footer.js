// @flow

import React from "react"
import styled from "styled-components"

const Footer = ({ title }) => (
  <StyledFooter>
    <address>2020 &copy; wmlee.me</address>
  </StyledFooter>
)
export default Footer

const StyledFooter = styled.footer`
  margin: 24px auto;
  max-width: 1024px;
  color: rgba(0, 0, 0, 0.4);
  a {
    text-decoration: none;
  }
`
