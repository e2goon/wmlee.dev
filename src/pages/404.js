import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404</h1>
      <p>페이지가 없어요!</p>
    </Layout>
  )
}

export default NotFoundPage
