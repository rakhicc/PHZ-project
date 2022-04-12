import Overlay from "../pages/OverLay";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("There is Icons, inputbox, close button and the headings on the page.", () => {
  render(<Overlay />);

  const scoreIcons = screen.getAllByTestId("icon");
  expect(scoreIcons.length).toBe(10);

  const inputBox = screen.getByTestId("answer");
  expect(inputBox).toBeInTheDocument();

  const closeButton = screen.getByTestId("close");
  expect(closeButton).toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: "Submit" });
  expect(submitButton).toBeInTheDocument();

  const allContent = screen.getByTestId("allContent");

  expect(allContent).toHaveTextContent(
    "How likely are you to recommend us to a friend or colleague?"
  );

  expect(allContent).toHaveTextContent("(1 = Not Likely, 10 = Very Likely)");
  expect(allContent).toHaveTextContent(
    "Please provide any comments to help explain your selection."
  );
});

test("Overlay testing the score and answer sending to App", async () => {
  let QA;

  const submit = (questionAnswers) => {
    QA = questionAnswers;
  };

  render(<Overlay submit={submit} />);
  const inputBox = screen.getByTestId("answer");
  const submitButton = screen.getByRole("button", { name: "Submit" });
  const scoreIcons = screen.getAllByTestId("icon");

  await fireEvent.click(scoreIcons[0]);
  await fireEvent.change(inputBox, { target: { value: "Amazing" } });
  await fireEvent.click(submitButton);

  expect(QA).toEqual({ number: 1, answer: "Amazing" });
});
