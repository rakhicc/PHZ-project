import React from "react";
import Button from "../UI/Button";
import styles from "./AfterSubmit.module.css";

const AfterSubmit = ({ message }) => {
  return (
    <div className={styles.overlay}>
      <div data-testid="AfterSubmit" className={styles.popup}>
        <div className={styles.allContent}>
          <h2>{message}</h2>
          <a href="/">
            <Button>Close</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AfterSubmit;
