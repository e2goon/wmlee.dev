import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { rgba } from "polished"

function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
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
      <Title>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </Title>
      <AvatarLink to="/resume">
        <Tooltip>
          <Icon>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="file"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
              ></path>
            </svg>
          </Icon>
          <span>이력서</span>
        </Tooltip>
        <Avatar fluid={data.profile.childImageSharp.fluid} alt="내 사진" />
      </AvatarLink>
    </StyledHeader>
  )
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
  text-transform: uppercase;
  line-height: 1;
  a {
    text-decoration: none;
    outline: none;
  }
  small {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 24px;
    font-size: 1.2rem;
  }
`

const Title = styled.h1`
  flex: 1;
  margin: 0;
  font-weight: bold;
  font-family: "Sulphur Point", sans-serif;
  a {
    text-decoration: none;
    &:focus,
    &:hover {
      -webkit-text-stroke: 1px #000;
    }
  }
`

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0.2rem;
  svg {
    width: 100%;
    height: 100%;
  }
`

const Tooltip = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
  color: #eee;
  border-radius: 4px;
  background: ${rgba("#000", 0.6)};
  backdrop-filter: blur(10px);
  white-space: nowrap;
  ${Icon} {
    margin-left: -0.2rem;
  }
  :focus,
  :hover {
    color: #fff;
  }
`

const Avatar = styled(Image)`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  box-shadow: 8px 15px 30px ${rgba("#000", 0.2)};
  overflow: hidden;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`

const AvatarLink = styled(Link)`
  display: block;
  position: relative;
  ${Tooltip} {
    position: absolute;
    bottom: -10%;
    left: 50%;
    opacity: 0;
    transform: translateX(-50%);
    transition: all 0.2s ease;
    z-index: 1;
  }
  :focus ${Tooltip}, :hover ${Tooltip} {
    margin-bottom: 2px;
    opacity: 1;
  }
  :focus ${Avatar}, :hover ${Avatar} {
    transform: translate(1px, 1px);
    box-shadow: 8px 10px 15px ${rgba("#000", 0.2)};
  }
`
