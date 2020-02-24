import React from 'react';
import styles from './Contacts.module.scss';
import BlockTitle from "../BlockTitle/BlockTitle";
import Fade from 'react-reveal/Fade';
import {Slide} from "react-reveal";
import {Field, reduxForm, reset} from "redux-form";
import * as axios from 'axios';

const ContactsForm = (props) => {
    return (
        <form className={styles.formWrapper} onSubmit={props.handleSubmit}>
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
    const onSubmit = (formData, dispatch) => {
        axios.post(
            "https://formfor.site/send/CLZt46f4m0z14MTRLb7QAJ5Jck7E6R",
            {name: formData.name, email: formData.email, message: formData.message}
        );
        dispatch(reset('ContactsFrom'));
    };

    return (
        <div id={"contacts"} className={styles.contacts}>
            <div className={styles.container}>
                <BlockTitle title={"Contacts"}/>
                <ContactsFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export default Contacts;
