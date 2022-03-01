import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderer from "react-test-renderer";

test("render the navbar", () => {
  const nav = renderer.create(<Navbar />).toJSON();
  expect(nav).toMatchSnapshot();
});

test("render the navbar", () => {
  render(<Navbar />);
  const nar = screen.getByRole("banner");
  expect(nar).toBeInTheDocument();
});
