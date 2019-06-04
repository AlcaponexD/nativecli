import React , { Component } from 'react';
import { View , StyleSheet } from 'react-native';
import Simples from './componentes/Simples';


export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Simples />
      </View>
    )
  }
}


const styles  = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  f20:{
    fontSize:50
  }
});