import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputPhoneField from "../InputPhoneField";

test("Check if component exists", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  expect(inputElement).toBeInTheDocument();
});

test("Caret : Empty input", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  expect(inputElement.selectionStart).toBe(0);
});
