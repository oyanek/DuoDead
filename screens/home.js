import * as React from 'react';
import { Button, Text, View } from 'react-native';

import { Container, Header, MainContent, NavButton } from '../components/structure.js';
import LessonScreen from './lessons.js';

class HomeScreen extends React.Component {
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center',
                           alignItems: 'center' }}>
              <Text>Home!</Text>
              <Button
                      title="Go to Lessons"
                      onPress={() => navigation.navigate(LessonScreen)}
                    />
            </View>
          );
    }
}

export default HomeScreen;
