import React from 'react';
import styles from './Projects.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Project from "./Project/Project";
import todolist from "./../../assets/img/todolist.jpg";

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <BlockTitle title={"Мои проекты"}/>
                <div className={styles.projectsWrapper}>
                    <Project title={"Social network"}
                             description={"Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."}/>
                    <Project title={"Todolist"}
                             description={"Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."}/>
                    <Project title={"Portfolio"}
                             description={"Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
