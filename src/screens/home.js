import * as React from 'react';
import { Text , View, StyleSheet, Image} from 'react-native';
import AppButton from '../assets/AppButton.js';

class HomeScreen extends React.Component {

    loadRoute = () => this.props.navigation.navigate('Lessons');
    loadRoute2 = () => this.props.navigation.navigate('My Progress');

    render(){
        return (
            <View style={styles.container}>
              <Text style={{fontSize :20, color: 'white', alignSelf: 'center', fontWeight: 'bold'}}>Welcome to Duo Dead!</Text>
              <AppButton
                      title="Start Lessons"
                      onPress={this.loadRoute}
                    />
              <AppButton
                      title="Choose Language"
                      onPress={null}
                    />
              <AppButton
                      title="My Progress"
                      onPress={this.loadRoute2}
                    />

               <Image source={require('../assets/DuoDead_Logo.png')} style={styles.logo} />

            </View>
          );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
	
	container :
  {
		padding: 30,
		height: '100%',
		width: '100%',
		backgroundColor: '#9d78ec'
	},

  logo: 
  {
    marginTop: 50,
    width: 250,
    height: 250,
    alignSelf: 'center'
  }
})