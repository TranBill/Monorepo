import * as React from 'react';
import Styles from '../styles';
import {Feather} from '@expo/vector-icons';
import moment from 'moment';
import {Text, View,ScrollView} from 'react-native';

function AttendanceScreen() {
    setInterval(() => {
        moment().format("ss");
      }, 1000);
      return (
        <ScrollView>
          <View style={Styles.container}>
            <View style={Styles.time_digital_clock}>
              <View style={{ flexDirection: "row" }}>
                <Feather name="clock" size={34} color="white" />
                <Text style={Styles.text_time_digital_clock}> Attendance</Text>
              </View>
              <Text style={Styles.text_time_day}>{moment().format("dddd, MMM Do YYYY")}</Text>
              <Text style={Styles.text_time_moment}>{moment().format("k:mm:ss")}</Text>
            </View>
            {/* <View style = {styles.wrapper_QR}>
          <View style = {styles.scan_QR}> </View>
          <View style = {styles.your_QR}> </View></View>
          <View style = {styles.history_timeline}> </View> */}
          </View>
        </ScrollView>
      );
}
export default AttendanceScreen;