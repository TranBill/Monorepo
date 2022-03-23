import { View, Text, Button } from "react-native";
import React, { useState } from "react";

import Styles from "../theme/styles";

const TestingScreen = () => {
  const [status, setStatus] = useState("");
  return (
    <View style={Styles.container}>
      <Text testID="TextID" style={Styles.textStyle}>{status}</Text>
      <Button testID="ButtonID" onPress={() => setStatus("PRESSED")} title="Button"/>
    </View>
  );
};

export default TestingScreen;