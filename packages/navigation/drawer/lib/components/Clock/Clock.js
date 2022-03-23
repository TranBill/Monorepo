// Library
import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import moment from "moment";
import { Feather } from "@expo/vector-icons";
// others
import styles from "./styles";
function Clock() {
    const [clockState, setClockState] = useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);
    setInterval(() => {
        moment().format("ss");
    }, 1);
    return (React.createElement(View, { style: styles.time_digital_clock },
        React.createElement(View, { style: { flexDirection: "row" } },
            React.createElement(Feather, { name: "clock", size: 34, color: "white" }),
            React.createElement(Text, { style: styles.text_time_digital_clock }, " Attendance")),
        React.createElement(Text, { style: styles.text_time_day }, moment().format("dddd, MMM Do YYYY")),
        React.createElement(Text, { style: styles.text_time_moment }, clockState)));
}
export default Clock;
