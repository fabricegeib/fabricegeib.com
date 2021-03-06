import React from "react"
import { Link, graphql } from "gatsby"
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="markdown-page">
        <h1>Markdown</h1>
        <h4 className="markdown-posts">{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="markdown-card" key={node.id}>
            <div className="markdown-card-content">
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`