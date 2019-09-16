import React from 'react';
import styles from './NavMenu.module.css';
import {Link} from "react-scroll";

class NavMenu extends React.Component {

    state = {
        links: [
            {title: "Main", path: "main"},
            {title: "Skills", path: "skills"},
            {title: "Projects", path: "projects"},
            {title: "Contacts", path: "contacts"}
        ]
    }

    render() {
        return (
            <div className={styles.navMenu}>
                {this.state.links.map(l =>
                    <Link to={l.path} smooth>{l.title}</Link>
                )}
            </div>
        )
    }
}

// const NavMenu = () => {
//     return (
//         <div className={styles.navMenu}>
//             <Link to="main" smooth>Main</Link>
//             <Link to="skills" smooth>Skills</Link>
//             <Link to="projects" smooth>Projects</Link>
//             <Link to="contacts" smooth>Contacts</Link>
//         </div>
//     );
// }

export default NavMenu;
