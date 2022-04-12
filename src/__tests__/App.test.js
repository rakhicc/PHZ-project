import App from "../App";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("If !submitted there is a LandingPage", () => {
  render(<App />);

  const LandingPage = screen.getByTestId("LandingPage");
  expect(LandingPage).toBeInTheDocument();
});

test("If !submitted there is a Overlay", () => {
  render(<App />);

  const Overlay = screen.getByTestId("popup1");
  expect(Overlay).toBeInTheDocument();
});

test("If submitted there is a AfterSubmit", async () => {
  render(<App />);

  const submitButton = screen.getByRole("button", { name: "Submit" });
  await fireEvent.click(submitButton);

  const Aftersubmit = screen.getByTestId("AfterSubmit");
  expect(Aftersubmit).toBeInTheDocument();
});
