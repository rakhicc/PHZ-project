import AfterSubmit from "../pages/AfterSubmit";
import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test(`There is a text "Thank you for submiting you feedback!"`, () => {
  render(
    <Router>
      <AfterSubmit message="Thank you for submiting you feedback!" />
    </Router>
  );

  const allContent = screen.getByTestId("AfterSubmit");
  expect(allContent).toHaveTextContent("Thank you for submiting you feedback!");
});

test(`There is a text "We weren't able to submit your answer. Please try again later!"`, () => {
  render(
    <Router>
      <AfterSubmit message="We weren't able to submit your answer. Please try again later!" />
    </Router>
  );

  const allContent = screen.getByTestId("AfterSubmit");
  expect(allContent).toHaveTextContent(
    "We weren't able to submit your answer. Please try again later!"
  );

  const Button = screen.getByRole("button");
  expect(Button).toBeInTheDocument();
  expect(Button).toHaveTextContent("Close");
});
