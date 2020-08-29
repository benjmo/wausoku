import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import PostIndex from "../components/post-list"
import SEO from "../components/seo"
import cirno from "./cirno-falling.gif"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <figure style={{ float: `right` }}>
        <img src={cirno} alt="Cirno falling" />
        <figcaption style={{ textAlign: `center` }}>
          Temporary image^
        </figcaption>
      </figure>
      <PostIndex name="Recent News" posts={posts} />
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "posts/news/" } }
      limit: 8
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
