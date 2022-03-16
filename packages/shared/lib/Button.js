import React from "react";
import { Button } from "react-native";
const SharedButton = ({ name = 'Button' }) => {
    return (React.createElement(Button, { title: name, onPress: () => console.log('Pressed') }));
};
export default SharedButton;
