import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./AfterSubmit.module.css";
import "../App.css";

const AfterSubmit = ({ message }) => {
  const [display, setDisplay] = useState("show");

  let navigate = useNavigate();

  const hide = () => {
    if (message === "Thank you for submiting you feedback!") {
      setDisplay("hide");
      window.parent.postMessage(
        {
          type: "submit",
          message: "submitted",
        },
        document.location.ancestorOrigins[0]
      );
    } else {
      navigate("/");
    }
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
