import React from 'react'
import styles from "../scss/header.module.scss"
const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.headerIcon} src="img/header-footer-icon.svg" alt="icon" />
            <h2 className={styles.h2}>Arête</h2>
            <img className={styles.burgerMenu} src="img/burger-menu.svg" alt="menu" />
        </header>
    )
}

export default Header
