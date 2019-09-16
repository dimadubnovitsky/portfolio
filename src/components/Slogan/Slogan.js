import React from 'react';
import styles from './Slogan.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Fade from 'react-reveal/Fade';

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <BlockTitle title={"I Am Available For Freelancer"}/>
                <Fade bottom>
                    <a className={styles.btnSubmit} href="">Hire me</a>
                </Fade>
            </div>
        </div>
    );
}

export default Slogan;
