import * as React from 'react';
import {Button, Text , View, StyleSheet, Alert} from 'react-native';
import { NavigationContainer }
         from '@react-navigation/native';
import { createBottomTabNavigator }
         from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Container, Header, MainContent, NavButton } from '../components/structure.js';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/home.js';
import LessonScreen from './screens/lessons.js';
import MyProgress from './screens/myProgress.js';
import Mod1Screen from './screens/module1.js';
import Mod2Screen from './screens/module2.js';
import Mod3Screen from './screens/module3.js';


class App extends React.Component {
  render() {
    return(
      <NavigationContainer >
      <Stack.Navigator initialRouteName={HomeScreen}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lessons" component={LessonScreen} />
        <Stack.Screen name="My Progress" component={MyProgress}/>
        <Stack.Screen name="Lesson 1" component={Mod1Screen}/>
        <Stack.Screen name="Lesson 2" component={Mod2Screen}/>
        <Stack.Screen name="Lesson 3" component={Mod3Screen}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;