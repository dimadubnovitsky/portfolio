import React from 'react';
import styles from './Skills.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Skill from "./Skill/Skill";
import htmlIcon from "./../../assets/img/html-icon.svg";
import jsIcon from "./../../assets/img/js-icon.svg";
import reactIcon from "./../../assets/img/react-icon.svg";

class Skills extends React.Component {

    state = {
        skills: [
            {
                title: "HTML&CSS",
                icon: htmlIcon,
                description: "Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."
            },
            {
                title: "JavaScript",
                icon: jsIcon,
                description: "Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."
            },
            {
                title: "React",
                icon: reactIcon,
                description: "Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."
            }
        ]
    }

    render() {
        return (
            <div id={"skills"} className={styles.skills}>
                <div className={styles.container}>
                    <BlockTitle title={"My skills"}/>
                    <div className={styles.skillsWrapper}>
                        {this.state.skills.map(s =>
                            <Skill title={s.title} icon={s.icon} description={s.description}/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
