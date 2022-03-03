import CardCar from "./CardCar";
import renderer from "react-test-renderer";

test("render the navbar", () => {
  const nav = renderer.create(<CardCar car={car} />).toJSON();
  expect(nav).toMatchSnapshot();
});
