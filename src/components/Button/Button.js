import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return (
        <div className={styles.button}>
            <a href="">{props.buttonTitle}</a>
        </div>
    );
}

export default Button;
