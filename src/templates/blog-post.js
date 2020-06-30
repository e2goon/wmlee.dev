import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  return (
    <Layout>
      <Post dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
  query SitePostQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Post = styled.article`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap");

  pre {
    font-size: 86%;
    font-weight: 500;
  }

  code {
    font-family: "Fira Code", Segoe UI, Malgun Gothic, Consolas, "Courier New",
      monospace;
  }

  padding: 24px;

  > :first-of-type {
    margin-top: 0;
  }

  > :last-of-type {
    margin-top: 0;
  }
`
