import React from 'react';
import styles from './NavMenu.module.css';
import { Link, animateScroll as scroll } from "react-scroll";

const NavMenu = () => {
    return (
        <div className={styles.navMenu}>
            <Link to="main" smooth>Main</Link>
            <Link to="skills" smooth>Skills</Link>
            <Link to="projects" smooth>Projects</Link>
            <Link to="contacts" smooth>Contacts</Link>
            {/*<a href="#main" className={styles.link}>Main</a>*/}
            {/*<a href="#skills" className={styles.link}>Skills</a>*/}
            {/*<a href="#projects" className={styles.link}>Projects</a>*/}
            {/*<a href="#contacts" className={styles.link}>Contacts</a>*/}
        </div>
    );
}

export default NavMenu;
