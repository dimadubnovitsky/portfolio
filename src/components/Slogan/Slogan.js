import React from 'react';
import styles from './Slogan.module.scss';
import BlockTitle from "../BlockTitle/BlockTitle";
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll/modules";

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <BlockTitle title={"I Am Available For Freelancer"}/>
                <Fade bottom>
                    {/*<a className={styles.btnSubmit} href="#contacts">Hire me</a>*/}
                    <Link className={styles.btnSubmit} to="contacts" smooth>Hire me</Link>
                </Fade>
            </div>
        </div>
    );
}

export default Slogan;
