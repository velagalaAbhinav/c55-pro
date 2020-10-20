import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BuzzerScreen from './screens/BuzzerScreen'


export default class App extends React.Component() {
render() {
  return (
    <View>
     <HomeScreen/>
    </View>
  );
}
}

