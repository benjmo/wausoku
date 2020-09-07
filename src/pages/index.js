import Namazu from "assets/namazu-left.png"
import { graphql, Link } from "gatsby"
import React from "react"
import Card from "../components/card"
import Layout from "../components/layout"
import PostIndex from "../components/post-list"
import SEO from "../components/seo"
import styles from "./index.module.css"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {/* <figure style={{ float: `right` }}>
        <img src={cirno} alt="Cirno falling" />
        <figcaption style={{ textAlign: `center` }}>
          Temporary image^
        </figcaption>
      </figure> */}
      <div class={`${styles.section} ${styles.group}`}>
        <div class={`${styles.col} ${styles.span_2_of_3}`}>
          <img src={Namazu} alt="Namazu" className={styles.displayImage} />
          <p>
            Weclome to <b>wausoku</b>, a community website for the Touhou 12.3
            game <i>Hisoutensoku</i>. Here you can find guides, resources,
            tools, mods and more from the community.
            <br />
          </p>
          <hr></hr>
          <PostIndex name="Recent News" posts={posts} />
        </div>
        <div class={`${styles.col} ${styles.span_1_of_3}`}>
          <small>
            New player? Check out the <Link to="/faq">FAQ</Link>
          </small>
          {/* Perhaps this can be moved to its own component later */}
          <Card title="Quick Links">
            <div className={styles.cardContent}>
              <h4>
                <span role="img" aria-label="open-book">
                  📖
                </span>{" "}
                Wiki
              </h4>
              <ul>
                <li>
                  <a href="https://hisouten.koumakan.jp/">English Wiki</a>
                </li>
                <li>
                  <a href="https://th123.glasscore.net/">Japanese Wiki</a>
                </li>
              </ul>
              <h4>
                <span role="img" aria-label="speech-bubble">
                  💬
                </span>{" "}
                Discord
              </h4>
              <ul>
                <li>
                  <a href="https://discord.gg/MbNzxpy">#hisouten Discord</a>
                </li>
                <li>
                  <a href="https://discord.gg/jzuWnUJ">OCE Soku Discord</a>{" "}
                  <small>(#hisoutensoku ch.)</small>
                </li>
              </ul>
              <h4>
                <span role="img" aria-label="hammer-and-wrench">
                  🛠
                </span>{" "}
                Tools
              </h4>
              <ul>
                <li>
                  <a href="https://sokureplays.delthas.fr/">
                    #hisouten Replays
                  </a>
                </li>
                <li>
                  <a href="https://www.ipfingerprints.com/portscan.php">
                    Port check tool
                  </a>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
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
