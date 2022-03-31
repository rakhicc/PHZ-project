import React from 'react';
import styles from './LandingPage.module.css'
import Button from '../UI/Button';
const LandingPage = () => {
    return (
       
        <div class={styles.landing}>
	      <a class={styles.button} href="#popup1"><Button>Click here to open the survey </Button></a>
      </div>
        
    );
};

export default LandingPage;