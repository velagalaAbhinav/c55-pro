import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppHeader from'../components/AppHeader'
import {Audio} from 'expo-av';

export default class HomeScreen extends React.Component{
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }
  render(){
    return(
    <View>
    <AppHeader/>

    <TouchableOpacity
      style={[styles.button,{backgroundColor:"yellow"}]}
      onPress={()=>this.playSound()}>
      <Text style = {styles.buttonText}>Sound 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button,{backgroundColor:"black"}]}
      onPress={()=>this.playSound()}>
      <Text style = {styles.buttonText}>Sound 2</Text>
      </TouchableOpacity>


      <TouchableOpacity
      style={[styles.button,{backgroundColor:"green"}]}
      onPress={()=>this.playSound}>
      <Text style = {styles.buttonText}>Sound 3</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={[styles.button,{backgroundColor:"red"}]}
      onPress={()=>this.playSound}>
      <Text style = {styles.buttonText}>Sound 4</Text>
      </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})