import { StatusBar } from 'expo-status-bar';
import { GreetingMobile, SharedButton} from '@bill/shared'
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <GreetingMobile whom='Hung' from='Loc' textcolor='red'/>
      <SharedButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
