import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="프론트엔드 개발자 이원민입니다." />
    <h2>최신 글</h2>
    {data.allMarkdownRemark.edges && (
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
    )}
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`
