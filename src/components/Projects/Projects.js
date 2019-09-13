import React from 'react';
import styles from './Projects.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Project from "./Project/Project";
import Fade from 'react-reveal/Fade';
import todolist from "./../../assets/img/todolist.jpg";
import calculator from "./../../assets/img/calculator.jpg";
import socialNetwork from "./../../assets/img/social-network.jpg";

const Projects = () => {
    return (
        <div id={"projects"} className={styles.projects}>
            <Fade bottom>
                <div className={styles.container}>
                    <BlockTitle title={"Мои проекты"}/>
                    <div className={styles.projectsWrapper}>
                        <Project backgroundImage={socialNetwork}
                                 title={"Social network"}
                                 description={"Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."}/>
                        <Project backgroundImage={todolist}
                                 title={"Todolist"}
                                 description={"Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."}/>
                        <Project backgroundImage={calculator}
                                 title={"Calculator"}
                                 description={"Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
