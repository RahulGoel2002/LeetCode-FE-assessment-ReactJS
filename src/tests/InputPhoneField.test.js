import {fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import InputPhoneField from "../InputPhoneField"

test("Check if component exists", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    expect(inputElement).toBeInTheDocument()
});

test("Input starts with empty", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    expect(inputElement.value).toBe("")
});

test("Give one character input", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    const test_text = "1";
    fireEvent.change(inputElement, {target : {value : test_text}});
    expect(inputElement.value).toBe(test_text)
});

test("Give a 3 character input", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    const test_text = "123";
    fireEvent.change(inputElement, {target : {value : test_text}});
    expect(inputElement.value).toBe(test_text)
});

test("Give a 4 character input", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    const test_text = "1234";
    const res = "(123) 4";
    fireEvent.change(inputElement, {target : {value : test_text}});
    expect(inputElement.value).toBe(res)
});

test("Give a 6 character input", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    const test_text = "123456";
    const res = "(123) 456";
    fireEvent.change(inputElement, {target : {value : test_text}});
    expect(inputElement.value).toBe(res);
});

test("Give a 7 character input", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    const test_text = "1234567";
    const res = "(123) 456-7";
    fireEvent.change(inputElement, {target : {value : test_text}});
    expect(inputElement.value).toBe(res)
});

test("Give a 10 character input", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    const test_text = "1234567890";
    const res = "(123) 456-7890";
    fireEvent.change(inputElement, {target : {value : test_text}});
    expect(inputElement.value).toBe(res)
});

test("Give a non-integer input", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    const test_text = "p";
    fireEvent.change(inputElement, {target : {value : test_text}});
    expect(inputElement.value).toBe("")
});

test("Give a non-integer input after 3 integer inputs", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    const test_text = "123p";
    fireEvent.change(inputElement, {target : {value : test_text}});
    expect(inputElement.value).toBe("123")
});

test("Give a non-integer input after 4 integer inputs", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    const test_text = "1234p";
    const res = "(123) 4";
    fireEvent.change(inputElement, {target : {value : test_text}});
    expect(inputElement.value).toBe(res);
});

test("Give a non-integer input after 7 integer inputs", () => {
    render(<InputPhoneField />);
    const inputElement = screen.getByTestId(/inputfield/i)
    const test_text = "1234567p";
    const res = "(123) 456-7";
    fireEvent.change(inputElement, {target : {value : test_text}});
    expect(inputElement.value).toBe(res);
});

