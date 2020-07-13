import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { lighten } from "polished"

function Posts() {
  const data = useStaticQuery(graphql`
    query SitePostsQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt(pruneLength: 60)
            frontmatter {
              title
              date(fromNow: true, locale: "ko")
              path
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <h2 className="sr-only">최신 글</h2>
      {data.allMarkdownRemark.edges && (
        <List>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <Item key={node.id}>
                <StyledLink to={node.frontmatter.path}>
                  <strong>{node.frontmatter.title}</strong>
                  <small>{node.frontmatter.date}</small>
                  <br />
                  <span>{node.excerpt}</span>
                </StyledLink>
              </Item>
            )
          })}
        </List>
      )}
    </>
  )
}

export default Posts

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  margin: 32px 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 15px 30px 60px rgba(0, 0, 0, 0.2);
  line-height: 1.6;
  color: #444;
  overflow: hidden;
  :first-of-type {
    margin-top: 0;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  strong {
    font-size: 140%;
    font-weight: normal;
    color: #000;
  }
  small {
    margin-left: 8px;
    color: ${lighten(0.4, "#000")};
  }

  @media (max-width: 768px) {
    margin: 0 16px;
  }
`

const StyledLink = styled(Link)`
  display: block;
  padding: 24px;
  text-decoration: none;
  :focus {
    background: #efefef;
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
`
