import { render, screen } from "@testing-library/react";
import Register from "./Register";
import renderer from "react-test-renderer";
test("render the Register Component", () => {
  render(<Register />);
  const Reg = screen.getByTestId("register");
  expect(Reg).toBeInTheDocument();
});

test("render the Register Ui", () => {
  const Reg = renderer.create(<Register />).toJSON();
  expect(Reg).toMatchSnapshot();
});
