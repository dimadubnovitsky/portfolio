import React from 'react';
import styles from './Footer.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import vkIcon from "./../../assets/img/vk.svg"
import facebookIcon from "./../../assets/img/facebook.svg"
import telegramIcon from "./../../assets/img/telegram.svg"
import linkedinIcon from "./../../assets/img/linkedin.svg"
import {Fade} from "react-reveal";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <BlockTitle title={"Dima Dubnovitsky"}/>
                <div className={styles.socialBlock}>
                    <Fade bottom>
                        <div className={styles.socialIcon}>
                            <a href="https://vk.com/dimad13" target="_blank">
                                <img src={vkIcon} alt="vk"/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="" target="_blank">
                                <img src={facebookIcon} alt="facebook"/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="" target="_blank">
                                <img src={telegramIcon} alt="telegram"/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="" target="_blank">
                                <img src={linkedinIcon} alt="linkedin"/>
                            </a>
                        </div>
                    </Fade>
                </div>
                <span className={styles.copyright}>©2019 All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
