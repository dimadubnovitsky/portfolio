import React from 'react';
import styles from './Footer.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import vkIcon from "./../../assets/img/vk.svg"
import facebookIcon from "./../../assets/img/facebook.svg"
import telegramIcon from "./../../assets/img/telegram.svg"
import linkedinIcon from "./../../assets/img/linkedin.svg"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <BlockTitle title={"Дмитрий Дубновицкий"}/>
                <div className={styles.socialBlock}>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={vkIcon} alt="vk"/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={facebookIcon} alt="facebook"/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={telegramIcon} alt="telegram"/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={linkedinIcon} alt="linkedin"/>
                        </a>
                    </div>

                </div>
                <span className={styles.copyright}>©2019 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
