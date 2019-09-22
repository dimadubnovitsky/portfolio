import React from 'react';
import styles from './Footer.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import vkIcon from "./../../assets/img/vk.svg"
import instagramIcon from "./../../assets/img/instagram.svg"
import telegramIcon from "./../../assets/img/telegram.svg"
import linkedinIcon from "./../../assets/img/linkedin.svg"
import {Fade} from "react-reveal";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <BlockTitle title={"Dima Dubnovitsky"}/>
                <Fade bottom>
                    <div className={styles.socialBlock}>
                        <div className={styles.socialIcon}>
                            <a href="https://vk.com/dimad13" target="_blank" rel="noopener noreferrer">
                                <img src={vkIcon} alt="vk"/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="https://www.instagram.com/dimadubnovitsky" target="_blank"
                               rel="noopener noreferrer">
                                <img src={instagramIcon} alt="instagram"/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="https://t.me/dimadubnovitsky" target="_blank" rel="noopener noreferrer">
                                <img src={telegramIcon} alt="telegram"/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="https://www.linkedin.com/in/dima-dubnovitsky-1018a9190" target="_blank"
                               rel="noopener noreferrer">
                                <img src={linkedinIcon} alt="linkedin"/>
                            </a>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <span className={styles.copyright}>©2019 All rights reserved</span>
                </Fade>
            </div>
        </div>
    );
}

export default Footer;
