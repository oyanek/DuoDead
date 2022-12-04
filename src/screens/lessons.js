import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer }
         from '@react-navigation/native';

import { Container, Header, MainContent, NavButton } from '../components/structure.js';

class LessonScreen extends React.Component {
  
  loadRoute1 = () => this.props.navigation.navigate('Lesson 1');
  loadRoute2 = () => this.props.navigation.navigate('Lesson 2');
  loadRoute3 = () => this.props.navigation.navigate('Lesson 3');
  
  render(){
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent : 'space-evenly'}}>
          <Text>Choose Your Lesson!</Text>
          <Button
            title="Lesson 1" 
            onPress={this.loadRoute1}/>
          <Button 
            title='Lesson 2' 
            onPress={this.loadRoute2}/>

          <Button 
            title='Lesson 3' 
            onPress={this.loadRoute3}/>
        </View>
      );
    }
}

export default LessonScreen;