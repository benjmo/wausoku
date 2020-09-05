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
            <Link className={styles.navbarLink} to="/news">
              News
            </Link>
          </li>
          <li className={`${styles.menuItem} ${styles.hasSubmenu}`}>
            <Link className={styles.navbarLink} to="/region">
              Region
            </Link>
            <ul className={styles.submenu}>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/region/international">
                  International
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/region/oceania">
                  Oceania
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.menuItem} ${styles.hasSubmenu}`}>
            <Link className={styles.navbarLink} to="/game">
              Game
            </Link>
            <ul className={styles.submenu}>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/game/download">
                  Download
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/game/mods">
                  Mods
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.menuItem} ${styles.hasSubmenu}`}>
            <Link className={styles.navbarLink} to="/guides">
              Guides
            </Link>
            <ul className={styles.submenu}>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/guides/gameplay">
                  Gameplay
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/guides/character">
                  Character
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/guides/setup">
                  Setup
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.navbarLink} to="/guides/other">
                  Other
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.navbarLink} to="/resources">
              Resources
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.navbarLink} to="/faq">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
