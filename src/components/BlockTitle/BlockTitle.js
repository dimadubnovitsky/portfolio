import React from 'react';
import styles from './BlockTitle.module.css';
import {Fade} from "react-reveal";

const BlockTitle = (props) => {
    return (
        <Fade bottom>
            <div className={styles.header}>
                <h2 className={styles.title}>{props.title}</h2>
                <div className={styles.line}/>
            </div>
        </Fade>
    );
}

export default BlockTitle;
