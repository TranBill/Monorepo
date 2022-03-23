import * as React from "react";
import Styles from "../styles";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { Text, View, ScrollView } from "react-native";
function AttendanceScreen() {
    setInterval(() => {
        moment().format("ss");
    }, 1000);
    return (React.createElement(ScrollView, null,
        React.createElement(View, { style: Styles.container },
            React.createElement(View, { style: Styles.time_digital_clock },
                React.createElement(View, { style: { flexDirection: "row" } },
                    React.createElement(Feather, { name: "clock", size: 34, color: "white" }),
                    React.createElement(Text, { style: Styles.text_time_digital_clock }, " Attendance")),
                React.createElement(Text, { style: Styles.text_time_day }, moment().format("dddd, MMM Do YYYY")),
                React.createElement(Text, { style: Styles.text_time_moment }, moment().format("k:mm:ss"))))));
}
export default AttendanceScreen;
