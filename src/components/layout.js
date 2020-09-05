import { Link } from "gatsby"
import React from "react"
import styles from "./layout.module.css"
import Navbar from "./navbar/navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  let pageContainerClasses = styles.pageContainer

  if (location.pathname === rootPath) {
    header = (
      <h1 id={styles.titleRoot}>
        <Link id={styles.titleLink} to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 id={styles.titleSubpage}>
        <Link id={styles.titleLink} to={`/`}>
          {title}
        </Link>
      </h3>
    )

    pageContainerClasses += ` ${styles.subpageContainer}`
  }
  return (
    <div id={styles.background}>
      <header id={styles.topBanner}>
        <div className={styles.bannerContainer}>{header}</div>
      </header>
      <Navbar />
      <div className={pageContainerClasses}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} wausoku | <Link to="/about/">About</Link>{" "}
          | <Link to="/contribute/">Contribute</Link>
        </footer>
      </div>
    </div>
  )
}

export default Layout
