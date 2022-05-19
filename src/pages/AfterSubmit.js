import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./AfterSubmit.module.css";
import "../App.css";

const AfterSubmit = ({ message, getParentURL }) => {
  const [display, setDisplay] = useState("show");

  let navigate = useNavigate();

  const hide = () => {
    if (message === "Thank you for submiting you feedback!") {
      setDisplay("hide");
      window.parent.postMessage(
        {
          type: "submit",
          message: {
            display: "none",
          },
        },
        getParentURL()
      );
    } else {
      navigate("/");
      window.parent.postMessage(
        {
          type: "closed",
          message: {
            bodyHeight: "6.5vh",
            bodyPosition: "absolute",
            bodyTop: "90vh",
            bodyLeft: "2vw",
            iFrameHeight: "6.5vh",
            width: "16vw",
            top: "unset",
            left: "0vw",
            bottom: "0px",
            display: "unset",
            border: "none",
          },
        },
        getParentURL()
      );
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
