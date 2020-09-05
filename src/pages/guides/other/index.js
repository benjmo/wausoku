import { graphql } from "gatsby"
import React from "react"
import Layout from "../../../components/layout"
import PostIndex from "../../../components/post-list"

const AllOtherGuides = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <PostIndex name="All Other Guides" posts={posts} />
    </Layout>
  )
}

export default AllOtherGuides

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "posts/guides/other/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            edited(formatString: "MMMM DD, YYYY")
            author
            title
            description
          }
        }
      }
    }
  }
`
