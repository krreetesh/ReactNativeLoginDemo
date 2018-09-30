import React, { Component } from 'react';
import { Alert, AppRegistry, Button, Text, StyleSheet, View, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from "react-native";

export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            txtUserName: '',
            txtPassword: '',
            txtConfirmPassword: '',
        }
      }

_onPressConfirmSignupButton=()=>{
    if (this.state.txtPassword == this.state.txtConfirmPassword)
    {
        Alert.alert('Congratulations !! You have signed up with Demo App')
        this._storeData()
        Actions.login()
    }
    else
    {
        Alert.alert('Please enter correct user id, password')
    }

    //this.setState({txtUserName:"John"})
    //alert(this.state.txtUserName);
    //console.log(this.state.text);
}

_onPressClearButton=()=>{
    this.setState({txtUserName:''})
    this.setState({txtPassword:''})
    this.setState({txtConfirmPassword:''})
}

_storeData = async () => {
    try {
      await AsyncStorage.setItem('UserName', this.state.txtUserName);
      AsyncStorage.setItem('Password', this.state.txtPassword);
    } catch (error) {
      // Error saving data
    }
  }

render() {
    return (        
        <View style={styles.container}>
        <Text style={styles.welcome}> 
        Welcome to Signup Screen
        </Text>
        <TextInput
        style={styles.userid}
        placeholder="Enter User ID"
        value={this.state.txtUserName}
        onChangeText={(userName) => this.setState({txtUserName:userName})}
        />

        <TextInput
        secureTextEntry={true}
        style={styles.password}
        placeholder="Enter Password"
        value={this.state.txtPassword}
        onChangeText={(pwd) => this.setState({txtPassword:pwd})}
        />
        <TextInput
        secureTextEntry={true}
        style={styles.password}
        placeholder="Confirm Password"
        value={this.state.txtConfirmPassword}
        onChangeText={(confirmPwd) => this.setState({txtConfirmPassword:confirmPwd})}
        />
        <View style={styles.buttonContainer}>
        <Button
            onPress={this._onPressConfirmSignupButton}
            title="Confirm"
            />
        <Button
            onPress={this._onPressClearButton}
            title="Clear"
            />
            </View>
            </View>
            );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9A9A9',
    },
    buttonContainer: {
        fontSize: 20,
        textAlign: 'center',
        flexDirection: 'row',
        margin: 20,
        color: '#ffffff',
        height: 90,
    },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    height: 90
    },
    userid: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    width: 160
    },
    password: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    width: 160
    },
                                });
