import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer }
         from '@react-navigation/native';

import { Container, Header, MainContent, NavButton } from '../components/structure.js';

class Mod3Screen extends React.Component {
    render(){
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent : 'space-around'}}>
          <Text>Lesson 3</Text>
        </View>
      );
    }
}

export default Mod3Screen;