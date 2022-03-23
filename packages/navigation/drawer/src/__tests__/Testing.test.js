import React from "react";
import { create, act } from "react-test-renderer";
import { TestingScreen } from "../screens/index";

const tree = create(<TestingScreen/>);

test("render correctly", () => {
    expect(tree).toMatchSnapshot();
});

test("working button", () => {
    const button = tree.root.findByProps({ testID: "ButtonID"}).props;
    act(() => button.onPress());

    const text = tree.root.findByProps({ testID: "TextID"}).props;
    expect(text.children).toEqual("PRESSED");
});
