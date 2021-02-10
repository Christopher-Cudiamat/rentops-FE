import { render,screen } from "@testing-library/react";
import JestTest from "./jestTest.component";

test("Button has correct initial color", () => {
  render(<JestTest/>);
  const colorButton = screen.getByRole('butt', {name: "Change to red"});
  expect(colorButton).toHaveStyle({background:"blue"});
});




