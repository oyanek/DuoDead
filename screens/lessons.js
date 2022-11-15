import * as React from 'react';
import { Button, Text, View } from 'react-native';

import { Container, Header, MainContent, NavButton } from '../components/structure.js';

class LessonScreen extends React.Component {
    render(){
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Lessons Screen</Text>
          <Button
            title="Go to Lessons... again"
            onPress={() => navigation.navigate(LessonScreen)}
          />
        </View>
      );
    }
}

export default LessonScreen;