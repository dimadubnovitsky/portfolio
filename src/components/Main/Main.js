import React from 'react';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div id={"main"} className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Я Дима <span>Дубновицкий</span></span>
                    <h1>front-end разработчик</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
