import AfterSubmit from "../pages/AfterSubmit";
import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test(`There is a text "Thank you for submiting you feedback!"`, () => {
  render(<AfterSubmit message="Thank you for submiting you feedback!" />);

  const allContent = screen.getByTestId("AfterSubmit");
  expect(allContent).toHaveTextContent("Thank you for submiting you feedback!");
});

test(`There is a text "We weren't able to submit your answer. Please try again later!"`, () => {
  render(
    <AfterSubmit message="We weren't able to submit your answer. Please try again later!" />
  );

  const allContent = screen.getByTestId("AfterSubmit");
  expect(allContent).toHaveTextContent(
    "We weren't able to submit your answer. Please try again later!"
  );

  const Button = screen.getByRole("button");
  expect(Button).toBeInTheDocument();
  expect(Button).toHaveTextContent("Close");

  const Link = screen.getByRole("link");
  expect(Link).toHaveAttribute("href", "/");
});
