import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer }
         from '@react-navigation/native';

import { Container, Header, MainContent, NavButton } from '../components/structure.js';
import LessonScreen from './lessons.js';

class HomeScreen extends React.Component {

    loadRoute = () => this.props.navigation.navigate('Lessons');

    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'space-evenly',
                           alignItems: 'center' }}>
              <Text>Duo-Dead Home!</Text>
              <Button
                      title="Choose Language"
                      onPress={null}
                    />
              <Button
                      title="Start Lessons"
                      onPress={this.loadRoute}
                    />
              <Button
                      title="Account"
                      onPress={null}
                    />
            </View>
          );
    }
}

export default HomeScreen;
