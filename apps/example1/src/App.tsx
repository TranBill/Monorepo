import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {View, Text} from 'react-native';
import { GreetingMobile, SharedButton} from '@bill/shared';
import { DrawerTab,Viewtext } from '@bill/drawer';
export default function App() {
  return (
    <>
    <DrawerTab/> 
    {/* <Viewtext/> */}
    {/* <View style={{flex: 1 ,justifyContent:'center',alignItems:'center'}}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <GreetingMobile whom='Hung' from='Loc' textcolor='red'/>
      <SharedButton/>
    </View> */}
    </>
  );
}


