import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"

function IndexPage() {
  return (
    <Layout>
      <SEO title="첫 화면" />
      <Posts />
    </Layout>
  )
}

export default IndexPage
