import { Link } from "gatsby"
import React from "react"
import styles from "./post-list.module.css"

/**
 * Displays a list of all of the posts passed in the props.posts object
 * Perhaps not a good way to do things since it expects certain data within props.posts
 * But Gatsby does not allow variables inside non-page static graphql queries
 *
 * @param {*} props
 * @param props.name The heading to show above the list of posts
 * @param props.posts The "posts"
 */
const PostIndex = ({ name, posts }) => {
  return (
    <React.Fragment>
      <h1 id={styles.listName}>{name}</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3 className={styles.postTitle}>
                <Link className={styles.postLink} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </React.Fragment>
  )
}

export default PostIndex
