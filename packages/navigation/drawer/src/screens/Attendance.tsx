import * as React from "react";
import Styles from "../theme/styles";
import moment from "moment";
import { View,ScrollView } from "react-native";

import { Clock } from "../components/Clock/index";

function AttendanceScreen() {
    setInterval(() => {
        moment().format("ss");
      }, 1000);
      return (
        <ScrollView>
          <View style={Styles.container}>
            <Clock/>
          </View>
        </ScrollView>
      );
}
export default AttendanceScreen;