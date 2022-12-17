import * as React from 'react';
import { Text , View, StyleSheet } from 'react-native';
import AppButton from '../assets/AppButton.js';

class MyProgress extends React.Component {
  
  render(){
        
        //Word to Word score
        var myScore1 = 500;

        //Image to Word score
        var myScore2 = 300;

        //Audio to Word score
        var myScore3 = 400;

        return (
        <View style={styles.container}>
          <Text style={{padding: 10, fontSize :25, fontWeight: 'bold', color: 'white', backgroundColor: '#484085', width: '100%', textAlign: 'center'}}>Your Scores</Text>
          <Text style={{padding: 20, fontSize :20, fontWeight: 'bold', color: 'white'}}>Word to Word: {myScore1}</Text>
          <Text style={{padding: 20, fontSize :20, fontWeight: 'bold', color: 'white'}}>Image to Word: {myScore2}</Text>
          <Text style={{padding: 20, fontSize :20, fontWeight: 'bold', color: 'white'}}>Audio to Word: {myScore3}</Text>
        </View>
      );
    }
}

export default MyProgress;

const styles = StyleSheet.create({
    
    container :{
        padding: 30,
        height: '100%',
        width: '100%',
        backgroundColor: '#9d78ec',
        alignItems: 'center', 
    }
})