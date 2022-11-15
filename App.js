import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer }
         from '@react-navigation/native';
import { createBottomTabNavigator }
         from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Container, Header, MainContent, NavButton } from '../components/structure.js';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/home.js';
import LessonScreen from './screens/lessons.js';

class App extends React.Component {
  render() {
    return(
      <NavigationContainer >
      <Stack.Navigator initialRouteName={HomeScreen}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lessons" component={LessonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;