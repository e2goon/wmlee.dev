---
title: "첫 포스팅"
path: "/first-post"
date: "2020-06-25"
---

# 첫 포스팅

마크다운으로 간단하게 작성해봤어요.

## 테스트1

문단1

## 테스트2

문단2

## Javascript code

```js
import { createGlobalStyle } from "styled-components"
```

```js{1,3-5}
this.isLine(1) // highlighted
this.isLine(2)
this.isLine(3) // highlighted
this.isLine(4) // highlighted
this.isLine(5) // highlighted
```

```jsx
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
```

```tsx
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
```

## Inline code

`$ yarn start`

## A collapsible

<details>
  <summary>Click to expand!</summary>

### hi...

```js
function() {}
```

</details>
