import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer }
         from '@react-navigation/native';
import { Bar } from 'react-native-progress';


import { Container, Header, MainContent, NavButton } from '../components/structure.js';

class Mod2Screen extends React.Component {
    render(){
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent : 'space-around'}}>
          <Text>Lesson 2</Text>
          <Bar 
          progress={0.0} 
          width={200} 
          height={6} 
          color={'blue'}/>
        </View>
      );
    }
}

export default Mod2Screen;