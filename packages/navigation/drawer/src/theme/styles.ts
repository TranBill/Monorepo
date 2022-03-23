import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle:{
        color: "#808080",
        fontSize: 25,
        textAlign:"auto"
    },
    time_digital_clock: {
        backgroundColor: "#4867aa",
        height: 250,
        margin: 12,
        borderRadius: 5,
        paddingLeft: 20,
        paddingTop: 25
      },
      text_time_digital_clock: {
        color: "white",
        fontWeight: "bold",
        fontSize: 35,
        bottom: "2%"
      },
      text_time_day: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        top: "5%"
      },
      text_time_moment: {
        color: "white",
        fontWeight: "bold",
        fontSize: 50,
        top: "35%"
      },
      wrapper_QR: {},
      scan_QR: {},
      your_QR: {},
      history_timeline: {},
      header: {
        bottom: "20%"
      },
      header_left: {
        left: "120%",
        bottom: "40%"
      },
      header_title: {
        left: "300%",
        backgroundColor: "#4867aa",
        width: "245%",
        height: "75%",
        borderRadius: 5,
        bottom: "20%"
      },
      text_title: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center",
        top: "6%"
      },
      header_right: {
        flexDirection: "row",
        width: 190,
        justifyContent: "space-around"
      },
      icon_notification: {
        top: "5%",
        right: "190%",
        aspectRatio: 48 / 58
      },
      icon_nine_dots: {
        right: "90%",
        aspectRatio: 48 / 58,
        top: "5%"
      },
      icon: {}    
});

export default Styles;