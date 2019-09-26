import React from 'react';
import styles from './Skill.module.scss';
import Fade from 'react-reveal/Fade';

const Skill = (props) => {
    return (
        <Fade bottom>
            <div className={styles.skill}>
                <div className={styles.icon}>
                    <img src={props.icon} alt=""/>
                </div>
                <h3 className={styles.skillTitle}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </Fade>
    );
}

export default Skill;
