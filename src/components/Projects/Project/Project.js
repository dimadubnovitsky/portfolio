import React from 'react';
import styles from './Project.module.css';
import Fade from 'react-reveal/Fade';

const Project = (props) => {
    return (
        <Fade bottom>
            <div className={styles.project}>
                <div className={styles.projectImg} style={{backgroundImage: `url(${props.backgroundImage})`}}>
                    {/*<a className={styles.btnShow} href="">Смотреть</a>*/}
                </div>
                <span className={styles.projectTitle}>{props.title}</span>
                <span className={styles.description}>{props.description}</span>
            </div>
        </Fade>
    );
}
export default Project;
