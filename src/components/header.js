import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"

const Header = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "wmlee.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledHeader>
      <h1>
        <Link to="/">WONMIN, LEE</Link>
      </h1>
      <Avatar fluid={data.profile.childImageSharp.fluid} alt="내 사진" />
    </StyledHeader>
  )
}

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
  width: 100%;
  max-width: 640px;
  max-height: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "Sulphur Point", sans-serif;
  text-transform: uppercase;
  line-height: 1;
  h1 {
    margin: 0;
    flex: 1;
  }
  a {
    text-decoration: none;
    outline: none;
    &:focus,
    &:hover {
      color: #333;
    }
  }
  small {
    font-size: 1.6rem;
  }
`

const Avatar = styled(Image)`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  box-shadow: 8px 15px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`
