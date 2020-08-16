import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { useState } from "react"
import styles from "./navbar.module.css"

/**
 * The navigation bar for the site
 * It's not done in a react-y way at all
 * And is also tedious to add/change elements, but it'll do for now
 */
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <span
        id={styles.menuToggle}
        role="button"
        tabIndex="0"
        onClick={() => setNavbarOpen(!navbarOpen)}
        onKeyDown={() => setNavbarOpen(!navbarOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </span>
      <div
        className={`${styles.container} ${
          navbarOpen ? "" : styles.mobileHidden
        }`}
      >
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link className={styles.navbarLink} to="/">
              Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.navbarLink} to="/">
              News
            </Link>
          </li>
          <li className={`${styles.menuItem} ${styles.hasSubmenu}`}>
            <Link className={styles.navbarLink} to="/">
              Region
            </Link>
            <ul className={styles.submenu}>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/">
                  International
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/">
                  Oceania
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.menuItem} ${styles.hasSubmenu}`}>
            <Link className={styles.navbarLink} to="/">
              Guides
            </Link>
            <ul className={styles.submenu}>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/">
                  Gameplay
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/">
                  Character
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/">
                  Setup
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.navbarLink} to="/">
              Tools
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
