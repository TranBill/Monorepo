import * as React from "react";
import Styles from "../theme/styles";
import moment from "moment";
import { View, ScrollView } from "react-native";
import { Clock } from "../components/Clock/index";
function AttendanceScreen() {
    setInterval(() => {
        moment().format("ss");
    }, 1000);
    return (React.createElement(ScrollView, null,
        React.createElement(View, { style: Styles.container },
            React.createElement(Clock, null))));
}
export default AttendanceScreen;
