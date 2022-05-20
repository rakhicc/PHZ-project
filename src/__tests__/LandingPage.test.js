import LandingPage from "../pages/LandingPage";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

test("There is a button", () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

  const Button = screen.getByRole("button");
  expect(Button).toBeInTheDocument();
  expect(Button).toHaveTextContent("Click here to answer the survey!");

  const Link = screen.getByTestId("LandingPage");
  expect(Link).toHaveAttribute("href", "/survey");
});
