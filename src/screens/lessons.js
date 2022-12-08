import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppButton from '../assets/AppButton.js';

class LessonScreen extends React.Component {
  
  //word to word
  loadRoute1 = () => this.props.navigation.navigate('Lesson 1');

  //image to word
  loadRoute2 = () => this.props.navigation.navigate('Lesson 2');

  //audio to word
  loadRoute3 = () => this.props.navigation.navigate('Lesson 3');
  
  render(){
        return (
        <View style={styles.container}>
          <Text style={{fontSize :25, fontWeight: 'bold', color: 'white'}}>Choose Your Lesson!</Text>
          <AppButton
            title="Word to Word" 
            onPress={this.loadRoute1}/>
          <AppButton 
            title='Image to Word' 
            onPress={this.loadRoute2}/>

          <AppButton 
            title='Audio to Word' 
            onPress={this.loadRoute3}/>
        </View>
      );
    }
}

export default LessonScreen;

const styles = StyleSheet.create({
	
	container :{
		padding: 30,
		height: '100%',
		width: '100%',
		backgroundColor: '#9d78ec',
    alignItems: 'center', 
	}
})