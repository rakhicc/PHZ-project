import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const LandingPage = ({ showSurvey }) => {
  return (
    <div>
      <Link to="/survey" data-testid="LandingPage">
        <Button submit={showSurvey}>
          Click here to answer the survey!{" "}
        </Button>
      </Link>
    </div>
  );
};

export default LandingPage;
