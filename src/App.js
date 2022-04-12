import "./App.css";
import LandingPage from "./pages/LandingPage";
import OverLay from "./pages/OverLay";
import AfterSubmit from "./pages/AfterSubmit";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (questionAnswers) => {
    let date;

    new Date().toISOString().substring(9, 10) === "T"
      ? (date = new Date().toISOString().substring(0, 9))
      : (date = new Date().toISOString().substring(0, 10));

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
      .then(() => setMessage("Thank you for submiting you feedback!"))
      .catch(() =>
        setMessage(
          "We weren't able to submit your answer. Please try again later!"
        )
      );
    setSubmitted(true);
  };

  return (
    <div data-testid="App" className="App">
      {!submitted && <LandingPage />}
      {!submitted && <OverLay submit={submitHandler} />}
      {submitted && <AfterSubmit message={message} />}
    </div>
  );
}

export default App;
