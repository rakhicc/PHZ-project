import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import styles from "./OverLay.module.css";
import DayCounter from "../functions/DayCounter";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { ReactComponent as Close } from "../assets/close-square.svg";
import { ReactComponent as Emoji1 } from "../assets/Emoji1.svg";
import { ReactComponent as Emoji2 } from "../assets/Emoji2.svg";
import { ReactComponent as Emoji3 } from "../assets/Emoji3.svg";
import { ReactComponent as Emoji4 } from "../assets/Emoji4.svg";
import { ReactComponent as Emoji5 } from "../assets/Emoji5.svg";
import { ReactComponent as Emoji6 } from "../assets/Emoji6.svg";
import { ReactComponent as Emoji7 } from "../assets/Emoji7.svg";
import { ReactComponent as Emoji8 } from "../assets/Emoji8.svg";
import { ReactComponent as Emoji9 } from "../assets/Emoji9.svg";
import { ReactComponent as Emoji10 } from "../assets/Emoji10.svg";

const OverLay = ({ submit, clickedOpen }) => {
  const [number, setNumber] = useState(0);
  const [answer, setAnswer] = useState("");
  const [select, setSelect] = useState(false);
  const [display, setDisplay] = useState();

  let navigate = useNavigate();
  let closed = localStorage.getItem("closeDate: ");

  // COMMENT THIS OUT IF YOU DONT WANT TO HAVE THE SURVEY CLOSED BUTTON RESTRICTION ON (7days)
  useEffect(() => {
    if (clickedOpen === "open") {
      setDisplay("show");
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
    } else {
      
      const howManyDays = DayCounter(closed);
      console.log(howManyDays)
      if (closed){
        console.log("line55")

      if (howManyDays < 6) {
        console.log("how many days")
      
      setDisplay("hide");
      
      navigate("/");
      
      } else {
      
      if (localStorage.getItem("submitDate: ")) {
        console.log("is this showing")
      
      if (
      
      new Date().toISOString().substring(0, 7) !==
      
      localStorage.getItem("submitDate: ").substring(0, 7)
      
      ) {
      
      setDisplay("show");
      
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
      
      } else {
      console.log("line 116")
      setDisplay("hide");
      
      navigate("/");
      
      }
      
      } else {

        setDisplay("show");
        
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
        
        }
      
      }
    }
    else {

      setDisplay("show");
      
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
      
      }
      }
  }, []);
  // COMMENT THIS OUT IF YOU DONT WANT TO HAVE THE SURVEY CLOSED BUTTON RESTRICTION ON (7days)

  function Select({ user, click, status }) {
    return (
      <li className={status ? styles.active : null} onClick={click}>
        {user}{" "}
      </li>
    );
  }

  const scores = [
    <Emoji1
      data-testid="icon"
      className={styles.emoji}
      onClick={() => setNumber(1)}
    />,
    <Emoji2
      data-testid="icon"
      className={styles.emoji}
      onClick={() => setNumber(2)}
    />,
    <Emoji3
      data-testid="icon"
      className={styles.emoji}
      onClick={() => setNumber(3)}
    />,
    <Emoji4
      data-testid="icon"
      className={styles.emoji}
      onClick={() => setNumber(4)}
    />,
    <Emoji5
      data-testid="icon"
      className={styles.emoji}
      onClick={() => setNumber(5)}
    />,
    <Emoji6
      data-testid="icon"
      className={styles.emoji}
      onClick={() => setNumber(6)}
    />,
    <Emoji7
      data-testid="icon"
      className={styles.emoji}
      onClick={() => setNumber(7)}
    />,
    <Emoji8
      data-testid="icon"
      className={styles.emoji}
      onClick={() => setNumber(8)}
    />,
    <Emoji9
      data-testid="icon"
      className={styles.emoji}
      onClick={() => setNumber(9)}
    />,
    <Emoji10
      data-testid="icon"
      className={styles.emoji}
      onClick={() => setNumber(10)}
    />,
  ];

  const handleSelect = (key) => {
    setSelect(key);
  };

  const answerHandler = (e) => {
    e.preventDefault();
    setAnswer(e.target.value);
  };

  const questionnaireSubmit = (e) => {
    e.preventDefault();
    if (number === 0) {
      alert("Please choose one number input");
    } else {
      const questionAnswers = {
        number,
        answer,
      };
      submit(questionAnswers);
      localStorage.removeItem("closeDate: ");
      navigate("/thankyou");
    }
  };

  const setCloseLocalStorage = () => {
    localStorage.setItem("closeDate: ", new Date());
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
    navigate("/");
  };

  return (
    <div id={display}>
      <div data-testid="popup1" className={styles.overlay}>
        <div className={styles.popup}>
          <Link
            to="/"
            data-testid="close"
            className={styles.close}
            href="/"
            onClick={setCloseLocalStorage}
          >
            <Close />
          </Link>

          <div data-testid="allContent" className={styles.allContent}>
            <div className={styles.question}>
              <h2>
                Would you recommend PHZ as employer to your friend or colleague?
              </h2>
              <h2>(1 = Not Likely, 10 = Very Likely)</h2>
            </div>
            <div className={styles.content}>
              {scores.map((score, key) => (
                <Select
                  key={key}
                  status={select === key}
                  click={() => handleSelect(key)}
                  user={score}
                />
              ))}
            </div>

            <div className={styles.question}>
              <h2>Why / why not?</h2>
              <textarea
                type="text"
                id="answer"
                data-testid="answer"
                className={styles.answer}
                onChange={answerHandler}
                maxLength="150"
                placeholder="Maximum length of 150 characters"
              ></textarea>
            </div>
            <Button submit={questionnaireSubmit}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLay;
