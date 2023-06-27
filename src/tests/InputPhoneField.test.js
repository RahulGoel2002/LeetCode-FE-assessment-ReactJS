import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputPhoneField from "../InputPhoneField";

test("Check if component exists", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  expect(inputElement).toBeInTheDocument();
});

test("Input starts with empty", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  expect(inputElement.value).toBe("");
});

test("Give one character input", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "1";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(test_text);
});

test("Give a 3 character input", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "123";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(test_text);
});

test("Give a 4 character input", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "1234";
  const res = "(123) 4";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(res);
});

test("Give a 6 character input", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "123456";
  const res = "(123) 456";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(res);
});

test("Give a 7 character input", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "1234567";
  const res = "(123) 456-7";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(res);
});

test("Give a 10 character input", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "1234567890";
  const res = "(123) 456-7890";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(res);
});

test("Give a non-integer input", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "p";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe("");
});

test("Give a non-integer input after 3 integer inputs", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "123p";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe("123");
});

test("Give a non-integer input after 4 integer inputs", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "1234p";
  const res = "(123) 4";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(res);
});

test("Give a non-integer input after 7 integer inputs", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "1234567p";
  const res = "(123) 456-7";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(res);
});

function backspace(element) {
  let actuallyTyped = element.value;

  const backspaceKey = {
    key: "Backspace",
    code: 8,
    inputType: "deleteContentBackward",
  };

  const sharedEventConfig = {
    key: backspaceKey.key,
    charCode: backspaceKey.code,
    keyCode: backspaceKey.code,
    which: backspaceKey.code,
    modifier: backspaceKey.modifier,
  };
  const downEvent = fireEvent.keyDown(element, sharedEventConfig);

  if (downEvent) {
    actuallyTyped = actuallyTyped.slice(0, -1);

    fireEvent.input(element, {
      target: { value: actuallyTyped },
      inputType: backspaceKey.inputType,
      bubbles: true,
      cancelable: true,
    });
  }

  fireEvent.keyUp(element, sharedEventConfig);
}

test("Testing backspace", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "1234567890";
  const res = "(123) 456-7890";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(res);
  inputElement.focus();
  backspace(inputElement);
  const res2 = "(123) 456-789";
  expect(inputElement.value).toBe(res2);
});

test("Testing backspace beyond decoration", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "1234567890";
  const res = "(123) 456-7890";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(res);
  inputElement.focus();
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  const res2 = "(123) 456";
  expect(inputElement.value).toBe(res2);
});

test("Testing backspace beyond decoration", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "1234567890";
  const res = "(123) 456-7890";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(res);
  inputElement.focus();
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  const res2 = "123";
  expect(inputElement.value).toBe(res2);
});

test("Testing backspace beyond decoration", () => {
  render(<InputPhoneField />);
  const inputElement = screen.getByTestId(/inputfield/i);
  const test_text = "1234567890";
  const res = "(123) 456-7890";
  fireEvent.change(inputElement, { target: { value: test_text } });
  expect(inputElement.value).toBe(res);
  inputElement.focus();
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  backspace(inputElement);
  const res2 = "";
  expect(inputElement.value).toBe(res2);
});
