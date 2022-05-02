import React from "react";
import styles from "./LandingPage.module.css";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const LandingPage = ({ showSurvey }) => {
  return (
    <div class={styles.landing}>
      <Link to="/survey" data-testid="LandingPage" class={styles.button}>
        <Button submit={showSurvey}>Click here to open the survey </Button>
      </Link>
    </div>
  );
};

export default LandingPage;
