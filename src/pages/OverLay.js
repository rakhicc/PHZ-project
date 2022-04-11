import React, { useState } from "react";
import Button from "../UI/Button";
import styles from './OverLay.module.css';
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

const OverLay = ({ submit }) => {

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

  const [number, setNumber] = useState(0);
  const [answer, setAnswer] = useState("");
  const [select, setSelect] = useState(false);

  const handleSelect = (key) => {
    setSelect(key);
  };

  const answerHandler = (e) => {
    e.preventDefault();
    setAnswer(e.target.value);
  };

  const questionnaireSubmit = (e) => {
    e.preventDefault();

    const questionAnswers = {
      number,
      answer,
    };
    submit(questionAnswers);
  };

  return (
    <div id="popup1" className={styles.overlay}>
      <div className={styles.popup}>
        <a data-testid="close" className={styles.close} href="/">
          <Close />
        </a>

        <div data-testid="allContent" className={styles.allContent}>
          <div className={styles.question}>
            <h2>
              How likely are you to recommend us to a friend or colleague?
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
            <h2>Please provide any comments to help explain your selection.</h2>
            <input
              type="text"
              id="answer"
              data-testid="answer"
              className={styles.answer}
              onChange={answerHandler}
            ></input>

          </div>

          <Button submit={questionnaireSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default OverLay;
