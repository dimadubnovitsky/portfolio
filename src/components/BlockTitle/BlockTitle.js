import React from 'react';
import styles from './BlockTitle.module.css';

const BlockTitle = (props) => {
    return (
        <div className={styles.header}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.line}/>
        </div>
    );
}

export default BlockTitle;
