import * as React from 'react';
import {Text,View, StyleSheet} from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style = {styles.textContainer}>
      <Text style = {styles.text}> DJ Band </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'white',
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;