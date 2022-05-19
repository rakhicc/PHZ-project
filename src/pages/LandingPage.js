import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import landing from "./LandingPage.module.css"

const LandingPage = ({ showSurvey }) => {
  return (
    <div className ={landing.holder}>
      <Link to="/survey" data-testid="LandingPage">
        <Button submit={showSurvey}>
          Click here to answer the survey!{" "}
        </Button>
      </Link>
    </div>
  );
};

export default LandingPage;
