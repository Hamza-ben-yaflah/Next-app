import Landing from "./Landing";
import { render, screen } from "@testing-library/react";

test("Render the landing Component", () => {
  render(<Landing />);
  const lan = screen.getByTestId("landing");
  expect(lan).toBeInTheDocument();
});
