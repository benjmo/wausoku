import React, { useState } from "react"
import NavbarLinks from "./navbar-links"
import styles from "./navbar.module.css"
// import Logo from "./Logo"

// const Navigation = styled.nav``
// const Toggle = styled.div``
// const Navbox = styled.div``
// const Hamburger = styled.div``

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      {/* <Logo /> */}
      <div
        className="Toggle"
        // navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          <div className="hamburger-open" />
        ) : (
          <div className="hamburger" />
        )}
      </div>
      {navbarOpen ? (
        <div className={styles.navboxOpen}>
          <NavbarLinks />
        </div>
      ) : (
        <div className={styles.navbox}>
          <NavbarLinks />
        </div>
      )}
    </nav>
  )
}

export default Navbar
