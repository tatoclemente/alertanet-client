import React from 'react'
import styles from './NavBar.module.css'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import IntlSwitcher from '../IntlSwitcher/IntlSwitcher'

const Navbar = ({locale}) => {
 
  return (
    <header className={styles.navBarContainer}>
        <div className={styles.advertisement}></div>
        <nav className={styles.navBar}>
          <div>Navbar</div>
          <div className={styles.rightContainer}>
            <IntlSwitcher locale={locale} />
            <ThemeSwitcher />
          </div>
        </nav>
    </header>
  )
}

export default Navbar