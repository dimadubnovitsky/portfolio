import React from 'react';
import styles from './Slogan.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Fade from 'react-reveal/Fade';

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <Fade bottom>
                <div className={styles.container}>
                    <BlockTitle title={"Рассматриваю варианты удаленной работы"}/>
                    <a className={styles.btnSubmit} href="">Нанять меня</a>
                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
