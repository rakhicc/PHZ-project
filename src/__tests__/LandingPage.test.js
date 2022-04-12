import LandingPage from "../pages/LandingPage";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

test("There is a button", () => {
  render(<LandingPage />);

  const Button = screen.getByRole("button");
  expect(Button).toBeInTheDocument();
  expect(Button).toHaveTextContent("Click here to open the survey");

  const Link = screen.getByTestId("LandingPage");
  expect(Link).toHaveAttribute("href", "#popup1");
});
