import React from 'react';
import styles from './Projects.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Project from "./Project/Project";
import todolist from "./../../assets/img/todolist.jpg";
import calculator from "./../../assets/img/calculator.jpg";
import socialNetwork from "./../../assets/img/social-network.jpg";

class Projects extends React.Component {
    state = {
        projects: [
            {
                title: "Social network",
                backgroundImage: socialNetwork,
                description: "Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."
            },
            {
                title: "Todolist",
                backgroundImage: todolist,
                description: "Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."
            },
            {
                title: "Calculator",
                backgroundImage: calculator,
                description: "Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."
            }
        ]
    }

    render() {
        return (
            <div id={"projects"} className={styles.projects}>
                <div className={styles.container}>
                    <BlockTitle title={"My projects"}/>
                    <div className={styles.projectsWrapper}>
                        {this.state.projects.map(p =>
                            <Project title={p.title} backgroundImage={p.backgroundImage} description={p.description}/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
