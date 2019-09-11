import React from 'react';
import styles from './Slogan.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <BlockTitle title={"Рассматриваю варианты удаленной работы"}/>
                <a className={styles.btnSubmit} href="">Нанять меня</a>
            </div>
        </div>
    );
}

export default Slogan;
