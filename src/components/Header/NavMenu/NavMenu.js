import React from 'react';
import styles from './NavMenu.module.css';
import {Link} from "react-scroll";

const NavMenu = () => {
    return (
        <div className={styles.navMenu}>
            <Link to="main" smooth>Main</Link>
            <Link to="skills" smooth>Skills</Link>
            <Link to="projects" smooth>Projects</Link>
            <Link to="contacts" smooth>Contacts</Link>
        </div>
    );
}

export default NavMenu;
