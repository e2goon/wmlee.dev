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
            excerpt(pruneLength: 30)
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
  line-height: 1.6;
  strong {
    font-size: 140%;
  }
  small {
    margin-left: 8px;
    color: ${lighten(0.4, "#000")};
  }
`

const StyledLink = styled(Link)`
  display: block;
  padding: 24px;
  text-decoration: none;
  :focus {
    background: #efefef;
  }
`
