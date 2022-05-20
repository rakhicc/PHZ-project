import Overlay from "../pages/OverLay";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(() => {
  cleanup();
});

const getParentURL = () => {
  return document.referrer;
};

test("There is Icons, inputbox, close button and the headings on the page.", () => {
  render(
    <Router>
      <Overlay getPURL={getParentURL} />
    </Router>
  );

  const scoreIcons = screen.getAllByTestId("icon");
  expect(scoreIcons.length).toBe(10);

  const inputBox = screen.getByTestId("answer");
  expect(inputBox).toBeInTheDocument();

  const closeButton = screen.getByTestId("close");
  expect(closeButton).toBeInTheDocument();
  expect(closeButton).toHaveAttribute("href", "/");

  const submitButton = screen.getByRole("button", { name: "Submit" });
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toHaveTextContent("Submit");
});

test("Overlay testing the score and answer sending to App", async () => {
  let QA;

  const submit = (questionAnswers) => {
    QA = questionAnswers;
  };

  render(
    <Router>
      <Overlay submit={submit} getPURL={getParentURL} />
    </Router>
  );
  const inputBox = screen.getByTestId("answer");
  const submitButton = screen.getByRole("button", { name: "Submit" });
  const scoreIcons = screen.getAllByTestId("icon");

  await fireEvent.click(scoreIcons[0]);
  await fireEvent.change(inputBox, { target: { value: "Amazing" } });
  await fireEvent.click(submitButton);

  expect(QA).toEqual({ number: 1, answer: "Amazing" });
});
