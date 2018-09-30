/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginScreen from './src/LoginScreen';
import MainScreen from './src/MainScreen';
import SignupScreen from './src/SignupScreen';
import LocalRealmDB from './src/LocalRealmDB';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or abc press menu button for dev menu',
});

const App = () => {
  return (
          <Router>
          <Scene key="root">
          <Scene key="login"
          component={LoginScreen}
          title="Login Screen"
          initial
          />
          <Scene
          key="main"
          component={MainScreen}
          title="Main Screen"
          //back = {()=> Actions.pop({name: 'hi'})}
          />
          <Scene
          key="signup"
          component={SignupScreen}
          title="Signup Screen"
          />
          <Scene
          key="localdb"
          component={LocalRealmDB}
          title="Realm Demo Screen"
          />
          </Scene>
          </Router>
          );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
