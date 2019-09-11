import React from 'react';
import styles from './Skills.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Skill from "./Skill/Skill";
import htmlIcon from "./../../assets/img/html-icon.svg";
import jsIcon from "./../../assets/img/js-icon.svg";
import reactIcon from "./../../assets/img/react-icon.svg";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <BlockTitle title={"Мои скиллы"}/>
                <div className={styles.skillsWrapper}>
                    <Skill title={"HTML&CSS"} icon={htmlIcon}
                           description={"Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."}/>
                    <Skill title={"JavaScript"} icon={jsIcon}
                           description={"Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."}/>
                    <Skill title={"React"} icon={reactIcon}
                           description={"Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
