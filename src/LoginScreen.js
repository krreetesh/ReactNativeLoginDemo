import React, { Component } from 'react';
import { Alert, AppRegistry, Button, Text, StyleSheet, View, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from "react-native";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassword: '',
            loginFlag: false
        }
    }

    componentDidMount() {
        this.setState({ txtUserName: '',txtPassword: '',loginFlag: false })
    }

    componentWillReceiveProps(nextProps){
        console.log("Props "+nextProps.isComingmain);
        //alert("Props "+nextProps.isComingmain)
        this.setState({ txtUserName: '',txtPassword: '',loginFlag: false })
      }

    clearScreen()
    {
        this.setState({ txtUserName: '',txtPassword: '',loginFlag: false })
    }

    _onPressLoginButton = () => {
        this._retrieveData().then(()=>{
            if (this.state.loginFlag == true) {
                Actions.main({isSendingToMainScreen: 'Hello'});
                //Actions.localdb();
                this.clearScreen();
            }
            else {
                alert('Please enter valid User ID and Password !!')
            }
        }) 
    }
    
    _onPressSignupButton() {
        Actions.signup()
    }

    async _retrieveData (){
        try {
            const valueForUserName = await AsyncStorage.getItem('UserName');
            const valueForPassword = await AsyncStorage.getItem('Password');
            if ((this.state.txtUserName == valueForUserName) && (this.state.txtPassword == valueForPassword)) {
                this.setState({ loginFlag: true })
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    _retrieveData1() {
        AsyncStorage.getItem("UserName").then((valueForUserName) => {
            //this.setDataHandler(value);
            alert("usr" + valueForUserName)
        }).done();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Login Screen
            </Text>
                <TextInput
                    style={styles.userid}
                    placeholder="Enter User ID"
                    value={this.state.txtUserName}
                    onChangeText={(userName) => this.setState({ txtUserName: userName })}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.password}
                    placeholder="Enter Password"
                    value={this.state.txtPassword}
                    onChangeText={(pwd) => this.setState({ txtPassword: pwd })}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressSignupButton}
                        title="Signup"
                    />
                    <Button
                        onPress={this._onPressLoginButton}
                        title="Login"
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


