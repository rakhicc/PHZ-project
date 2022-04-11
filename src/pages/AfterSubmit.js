import React from 'react';
import Button from '../UI/Button';
import styles from './OverLay.module.css';

const AfterSubmit = () => {
    return (
        
            <div className={styles.popup}>
                <div className={styles.allContent}>
                <h2>Thank you for submiting you feedback!</h2>
                <a href="/"><Button>Close</Button></a>
                </div>
            </div>     
       
    );
};

export default AfterSubmit;