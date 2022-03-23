import React from "react";
import Calendarscreen from "../src/screens/Calendar";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Calendarscreen />).toJSON();
  expect(tree).toMatchSnapshot();
});