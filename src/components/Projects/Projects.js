import React from 'react';
import styles from './Projects.module.scss';
import BlockTitle from "../BlockTitle/BlockTitle";
import Project from "./Project/Project";
import iridescentStudio from "./../../assets/img/iridescent.png";

class Projects extends React.Component {
    state = {
        projects: [
            {
                title: "Iridescent Studio website (in progress now)",
                backgroundImage: iridescentStudio,
                link: "https://iridescent.studio",
                description: "Website for Iridescent Studio. Website are built with React JS and Redux."
            },
        ]
    }

    render() {
        return (
            <div id={"projects"} className={styles.projects}>
                <div className={styles.container}>
                    <BlockTitle title={"My projects"}/>
                    <div className={styles.projectsWrapper}>
                        {this.state.projects.map(project =>
                            <Project title={project.title} link={project.link} backgroundImage={project.backgroundImage}
                                     description={project.description}/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
