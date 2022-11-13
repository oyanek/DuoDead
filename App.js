import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer }
         from '@react-navigation/native';
import { createBottomTabNavigator }
         from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',
                   alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
              title="Go to Lessons"
              onPress={() => navigation.navigate('Lessons')}
            />
    </View>
  );
}


function Lessons({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Lessons Screen</Text>
      <Button
        title="Go to Lessons... again"
        onPress={() => navigation.navigate('Lessons')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lessons" component={Lessons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
