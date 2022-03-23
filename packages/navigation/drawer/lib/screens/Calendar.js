import { View, Text } from "react-native";
import React from "react";
import Styles from "../theme/styles";
const Calendarscreen = () => {
    return (React.createElement(View, { style: Styles.container },
        React.createElement(Text, { style: Styles.textStyle }, "Calendar")));
};
export default Calendarscreen;
