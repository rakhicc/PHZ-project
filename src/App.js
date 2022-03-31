import "./App.css";
import LandingPage from "./pages/LandingPage";
import OverLay from "./pages/OverLay";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (questionAnswers) => {
    let date;

    new Date().toISOString().substring(9, 10) === "T"
      ? (date = new Date().toISOString().substring(0, 9))
      : (date = new Date().toISOString().substring(0, 10));

    console.log(date);

    const dataForBackend = {
      employeeid: Math.floor(Math.random() * 500),
      date: date,
      score: questionAnswers.number,
      feedback: questionAnswers.answer,
    };

    fetch("http://localhost:3010/api/npsdata", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dataForBackend),
    })
      .then((result) => console.log("Working: " + result))
      .catch((error) => console.log("Not working: " + error));
    setSubmitted(true);
  };

  return (
    <div className="App">
      {!submitted && <LandingPage />}
      {!submitted && <OverLay submit={submitHandler} />}
      {submitted && <h1>Make a new component here!</h1>}
    </div>
  );
}

export default App;
