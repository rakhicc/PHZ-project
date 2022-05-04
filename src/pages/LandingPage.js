import React from "react";
import styles from "./LandingPage.module.css";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const LandingPage = ({ showSurvey }) => {
  return (
    <div>
      <Link to="/survey" data-testid="LandingPage" class={styles.button}>
        <Button submit={showSurvey}>
          Click here to answer to the survey!{" "}
        </Button>
      </Link>
    </div>
  );
};

export default LandingPage;
