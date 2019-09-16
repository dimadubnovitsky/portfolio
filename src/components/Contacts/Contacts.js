import React from 'react';
import styles from './Contacts.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Fade from 'react-reveal/Fade';
import {Slide} from "react-reveal";

const Contacts = () => {
    return (
        <div id={"contacts"} className={styles.contacts}>
            <div className={styles.container}>
                <BlockTitle title={"Contacts"}/>
                <form className={styles.formWrapper}>
                    <Slide bottom>
                        <input className={styles.formArea} placeholder="Name" type="text"/>
                        <input className={styles.formArea} placeholder="E-mail" type="email"/>
                        <textarea className={styles.messageArea} placeholder="Message"/>
                    </Slide>
                    <Fade bottom>
                        <button className={styles.btnSubmit} type="submit">Send</button>
                    </Fade>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
