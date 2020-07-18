import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../layouts/default"
import SEO from "../components/seo"

function BlogPost({ data }) {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <Post dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query SitePostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Post = styled.article`
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 15px 30px 60px rgba(0, 0, 0, 0.2);
  color: #444;
  overflow: hidden;

  > *:first-child {
    margin-top: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    color: #000;
  }

  pre {
    font-weight: 500;
  }

  code {
    font-family: "Fira Code", Segoe UI, Malgun Gothic, Consolas, "Courier New",
      monospace;
  }

  .grvsc-container {
    --grvsc-border-radius: 0;
    margin: 1.75rem -24px;
  }

  @media (max-width: 768px) {
    padding: 24px 16px;

    .grvsc-container {
      --grvsc-border-radius: 0;
      margin: 1.25rem -16px;
    }
  }
`