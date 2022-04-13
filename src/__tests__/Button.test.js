import Button from "..//UI/Button";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

test("There is a button", () => {
  render(<Button></Button>);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test(`There is a button with text "Close"`, () => {
  render(<Button>Close</Button>);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Close");
});

test(`There is a button with text "Submit"`, () => {
  render(<Button>Submit</Button>);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Submit");
});

test(`There is a button with text "Click here to open the survey"`, () => {
  render(<Button>Click here to open the survey</Button>);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Click here to open the survey");
});
