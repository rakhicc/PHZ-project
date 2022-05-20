import App from "../App";
import Overlay from "../pages/OverLay";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React, { useState } from "react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("If !submitted there is a LandingPage", () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const LandingPage = screen.getByTestId("LandingPage");
  expect(LandingPage).toBeInTheDocument();
});
