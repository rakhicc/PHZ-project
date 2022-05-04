import "./App.css";
import LandingPage from "./pages/LandingPage";
import OverLay from "./pages/OverLay";
import AfterSubmit from "./pages/AfterSubmit";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [display, setDisplay] = useState("show");
  const [displayOverlay, setDisplayOverlay] = useState();
  const [message, setMessage] = useState("");

  // IF YOU WANT TO TAKE OF THE RESTRICTION OF SENDING MULTIPLE ANSWERS COMMENT THIS OUT,
  // ALSO IF YOU HAVE SUBMITTED ONE SURVEY YOU CAN GO TO OVERLAY AND COMMENT OUT THERE THE RESTRICTION

  /* const hide = () => {
    new Date().toISOString().substring(0, 6) !==
    localStorage.getItem("submitDate: ").substring(0, 6)
      ? console.log(display)
      : setDisplay("hide");
  };

  useEffect(() => {
    hide();
  }, []); */

  // IF YOU WANT TO TAKE OF THE RESTRICTION OF SENDING MULTIPLE ANSWERS COMMENT THIS OUT

  const showSurvey = () => {
    setDisplayOverlay("show");
    window.parent.postMessage(
      {
        type: "open",
        message: "open",
      },
      document.location.ancestorOrigins[0]
    );
  };

  const submitHandler = (questionAnswers) => {
    let date;

    new Date().toISOString().substring(9, 10) === "T"
      ? (date = new Date().toISOString().substring(0, 9))
      : (date = new Date().toISOString().substring(0, 10));

    const dataForBackend = {
      id: Math.floor(Math.random() * 500),
      date: date,
      score: questionAnswers.number,
      feedback: questionAnswers.answer,
    };

    fetch(process.env.REACT_APP_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dataForBackend),
    })
      .then(() => {
        setMessage("Thank you for submiting you feedback!");
        localStorage.setItem("submitDate: ", new Date().toISOString());
      })
      .catch(() =>
        setMessage(
          "We weren't able to submit your answer. Please try again later!"
        )
      );
  };

  return (
    <div data-testid="App" className="App" id={display}>
      <Routes>
        <Route path="/" element={<LandingPage showSurvey={showSurvey} />} />
        <Route
          path="/survey"
          element={
            <OverLay submit={submitHandler} displayApp={displayOverlay} />
          }
        />
        <Route path="/thankyou" element={<AfterSubmit message={message} />} />
      </Routes>
    </div>
  );
}

export default App;
