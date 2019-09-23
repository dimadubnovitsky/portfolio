import React from 'react';
import styles from './Contacts.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Fade from 'react-reveal/Fade';
import {Slide} from "react-reveal";
import {Field, reduxForm} from "redux-form";

const ContactsForm = () => {
    return (
        <form className={styles.formWrapper}>
            <Slide bottom>
                <Field className={styles.formArea} name="name" placeholder="Name" type="text" component="input"/>
                <Field className={styles.formArea} name="email" placeholder="E-mail" type="email" component="input"/>
                <Field className={styles.messageArea} name="message" placeholder="Message" component="textarea"/>
            </Slide>
            <Fade bottom>
                <button className={styles.btnSubmit} type="submit">Send</button>
            </Fade>
        </form>
    )
}

const ContactsFormRedux = reduxForm({form: "ContactsFrom"})(ContactsForm)

const Contacts = () => {
    return (
        <div id={"contacts"} className={styles.contacts}>
            <div className={styles.container}>
                <BlockTitle title={"Contacts"}/>
                <ContactsFormRedux/>
            </div>
        </div>
    );
}

export default Contacts;
