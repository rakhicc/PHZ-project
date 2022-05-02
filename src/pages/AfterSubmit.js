import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./AfterSubmit.module.css";
import "../App.css";

const AfterSubmit = ({ message }) => {
  const [display, setDisplay] = useState("show");

  const hide = () => {
    setDisplay("hide");
    localStorage.setItem("submitDate: ", new Date().toISOString());
  };

  return (
    <div id={display} className={styles.overlay}>
      <div data-testid="AfterSubmit" className={styles.popup}>
        <div className={styles.allContent}>
          <h2>{message}</h2>
          <Button submit={hide}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default AfterSubmit;
