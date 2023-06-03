import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import UserForm from "./components/UseForm";
import { expect } from "vitest";

test("it show two inputs and a button", () => {
  //*render component , component can get props
  render(<UserForm />); //  render(<UserForm name="" />); => with props

  //*Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //*Assertion - make sure the componet is doing
  //*what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
