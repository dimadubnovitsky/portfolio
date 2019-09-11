import React from 'react';
import styles from './Contacts.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <BlockTitle title={"Контакты"}/>
                <form className={styles.formWrapper}>
                    <input className={styles.formArea} placeholder="Имя" type="text"/>
                    <input className={styles.formArea} placeholder="E-mail" type="email"/>
                    <textarea className={styles.messageArea} placeholder="Сообщение"></textarea>
                    <button className={styles.btnSubmit} type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
