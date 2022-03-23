import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import Styles from "../theme/styles";
const TestingScreen = () => {
    const [status, setStatus] = useState("");
    return (React.createElement(View, { style: Styles.container },
        React.createElement(Text, { testID: "TextID", style: Styles.textStyle }, status),
        React.createElement(Button, { testID: "ButtonID", onPress: () => setStatus("PRESSED"), title: "Button" })));
};
export default TestingScreen;
