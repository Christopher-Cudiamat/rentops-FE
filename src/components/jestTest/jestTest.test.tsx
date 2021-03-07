// import { render,screen, fireEvent } from "@testing-library/react";
// import JestTest from "./jestTest.component";

// test("Button has correct initial color", () => {
//   render(<JestTest/>);

//   const colorButton = screen.getByRole('button', {name: "Change color to blue"});

//   //Expect the background color to red
//   expect(colorButton).toHaveStyle({background:"red"});

//   //Click button
//   fireEvent.click(colorButton);

//   //Expect the backgroud to be blue
//   expect(colorButton).toHaveStyle({background:"blue"});

//   //Expect the button text to be red
//   expect(colorButton).toHaveTextContent("Change color to red")
// });

// test("initial condition",() => {
//   render(<JestTest />)
//   //checks that the button starts out enable
//   const colorButton = screen.getByRole("button",{name: "Change color to blue"});
//   expect(colorButton).toBeEnabled();

//   //checks that the checkboks starts out unchecked
//   const checkbox = screen.getByRole("checkbox");
//   expect(checkbox).not.toBeChecked();
// })OR

//QuIZ TEST

import { render, screen, fireEvent } from "@testing-library/react";
import JestTest from "./jestTest.component";

test("toggle enable button with checkbox", () => {
  render(<JestTest />);
  const targetButton = screen.getByRole("button", { name: "Button" });
  expect(targetButton).toBeEnabled();

  const targetCheckbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  expect(targetCheckbox).not.toBeChecked();

  fireEvent.click(targetCheckbox);

  expect(targetCheckbox).toBeChecked();
  expect(targetButton).toBeDisabled();
});

test("Button is gray when disabled", () => {
  render(<JestTest />);
  const targetButton = screen.getByRole("button", { name: "Button" });
  expect(targetButton).toHaveStyle({ background: "blue" });
});
