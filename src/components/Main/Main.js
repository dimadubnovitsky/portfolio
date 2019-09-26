import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
    return (
        <div id={"main"} className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi there</span>
                    <span>I am Dima <span>Dubnovitsky</span></span>
                    <h1>A front-end developer</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
