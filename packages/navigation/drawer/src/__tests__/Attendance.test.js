/* eslint-disable no-undef */
import React from "react";
import AttendanceScreen from "../screens/index";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<AttendanceScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});