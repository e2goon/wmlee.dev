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
            excerpt(pruneLength: 100, truncate: true)
            frontmatter {
              title
              date(fromNow: true, locale: "ko")
              slug
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
                <StyledLink to={node.frontmatter.slug}>
                  <strong>{node.frontmatter.title}</strong>
                  <small>{node.frontmatter.date}</small>
                  <div>{node.excerpt}</div>
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
  border-radius: 8px;
  box-shadow: 15px 30px 60px rgba(0, 0, 0, 0.2);
  color: #444;
  overflow: hidden;
  :first-of-type {
    margin-top: 0;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  strong {
    font-size: 1.4rem;
    color: #000;
  }
  small {
    margin-left: 8px;
    color: ${lighten(0.4, "#000")};
  }
  div {
    margin-top: 0.4rem;
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
