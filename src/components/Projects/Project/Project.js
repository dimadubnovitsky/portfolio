import React from 'react';
import styles from './Project.module.css';

const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.projectImg}>
                <a className={styles.btnShow} href="">Смотреть</a>
            </div>
            <span className={styles.projectTitle}>{props.title}</span>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Project;
