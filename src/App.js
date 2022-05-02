import "./App.css";
import LandingPage from "./pages/LandingPage";
import OverLay from "./pages/OverLay";
import AfterSubmit from "./pages/AfterSubmit";
import { useState, useEffect } from "react";

function App() {
  const [display, setDisplay] = useState("show");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  // IF YOU WANT TO TAKE OF THE RESTRICTION OF SENDING MULTIPLE ANSWERS COMMENT THIS OUT
  useEffect(() => {
    console.log("app.js");
    hide();
  }, []);

  const hide = () => {
    new Date().toISOString().substring(0, 6) !==
    localStorage.getItem("submitDate: ").substring(0, 6)
      ? console.log(display)
      : setDisplay("hide");
  };
  // IF YOU WANT TO TAKE OF THE RESTRICTION OF SENDING MULTIPLE ANSWERS COMMENT THIS OUT

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
      .then(() => setMessage("Thank you for submiting you feedback!"))
      .catch(() =>
        setMessage(
          "We weren't able to submit your answer. Please try again later!"
        )
      );
    setSubmitted(true);
  };

  return (
    <div data-testid="App" className="App" id={display}>
      {!submitted && <LandingPage />}
      {!submitted && <OverLay submit={submitHandler} />}
      {submitted && <AfterSubmit message={message} />}
    </div>
  );
}

export default App;
