import "./App.css";
import LandingPage from "./pages/LandingPage";
import OverLay from "./pages/OverLay";
import AfterSubmit from "./pages/AfterSubmit";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [display, setDisplay] = useState("show");
  const [message, setMessage] = useState("");
  const [openSurvey, setOpenSurvey] = useState("");

  let navigate = useNavigate();

  const hide = () => {
    if (!localStorage.getItem("submitDate: ")) {
      console.log("no submit date");
      if (!localStorage.getItem("closeDate: ")) {
        navigate("/survey");
      } else {
        setDisplay("show");
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
          document.location.ancestorOrigins[0]
        );
      }
    } else {
      if (
        new Date().toISOString().substring(0, 7) !==
        localStorage.getItem("submitDate: ").substring(0, 7)
      ) {
        setDisplay("show");
      } else {
        setDisplay("hide");
        window.parent.postMessage(

          {
          
          type: "submit",
          
          message: {
          
          display: "none",
          
          },
          
          },
          
          document.location.ancestorOrigins[0]
          
          );
      }
    }
  };

  useEffect(() => {
    hide(); // IF YOU WANT TO TAKE OF THE RESTRICTION OF SENDING MULTIPLE ANSWERS COMMENT THIS OUT
  }, []);

  const showSurvey = () => {
    window.parent.postMessage(
      {
        type: "open",
        message: {
          bodyHeight: "100vh",
          bodyPosition: "absolute",
          bodyTop: "0px",
          bodyLeft: "0px",
          iFrameHeight: "100vh",
          width: "100vw",
          top: "unset",
          left: "0vw",
          bottom: "0px",
          display: "unset",
          border: "10px",
        },
      },
      document.location.ancestorOrigins[0]
    );
    navigate("/survey");
    setOpenSurvey("open");
  };

  const submitHandler = (questionAnswers) => {
    let date;

    new Date().toISOString().substring(9, 10) === "T"
      ? (date = new Date().toISOString().substring(0, 9))
      : (date = new Date().toISOString().substring(0, 10));

    const dataForBackend = {
      id: Number(String(new Date().valueOf()).substring(0, 9)),
      date: date,
      score: questionAnswers.number,
      feedback: questionAnswers.answer,
    };

    !process.env.REACT_APP_URL
      ? setMessage(
          "We weren't able to submit your answer. Please try again later!"
        )
      : fetch(process.env.REACT_APP_URL, {
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
          element={<OverLay submit={submitHandler} clickedOpen={openSurvey} />}
        />
        <Route path="/thankyou" element={<AfterSubmit message={message} />} />
      </Routes>
    </div>
  );
}

export default App;
