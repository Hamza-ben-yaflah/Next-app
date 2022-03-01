import Login from "./Login";
import renderer from "react-test-renderer";
import { screen, render } from "@testing-library/react";
test("render the navbar", () => {
  const log = renderer.create(<Login />).toJSON();
  expect(log).toMatchSnapshot();
});

test("render the ", () => {
  const funcrion = jest.fn();
  render(<Login changeState={funcrion} />);
  const log = screen.getByTestId("login");
  expect(log).toBeInTheDocument();
});
