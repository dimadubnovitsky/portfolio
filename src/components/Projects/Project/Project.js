import React from 'react';
import styles from './Project.module.scss';
import Fade from 'react-reveal/Fade';

const Project = (props) => {
    return (
        <Fade bottom>
            <div className={styles.project}>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <div className={styles.projectLink}>
                        <div className={styles.projectImg}>
                            <img src={props.backgroundImage} alt=""/>
                        </div>
                        <span>See the project</span>
                    </div>
                </a>
                <span className={styles.projectTitle}>{props.title}</span>
                <span className={styles.description}>{props.description}</span>
            </div>
        </Fade>
    );
}
export default Project;
