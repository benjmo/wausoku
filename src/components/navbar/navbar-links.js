import { Link } from "gatsby"
import React from "react"
import styles from "./navbar-links.module.css"

const NavbarLinks = () => {
  return (
    <>
      <Link className={styles.navbarLink} to="/">
        Home
      </Link>
      <Link className={styles.navbarLink} to="/">
        OCE Region
      </Link>
      <Link className={styles.navbarLink} to="/">
        Guides
      </Link>
      <Link className={styles.navbarLink} to="/">
        Tools
      </Link>
    </>
  )
}

export default NavbarLinks
