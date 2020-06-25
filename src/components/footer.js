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
  color: rgba(0, 0, 0, 0.4);
  font-size: 80%;
  a {
    text-decoration: none;
  }
`
