import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import Realm from 'realm';

export default class MainScreen extends Component {
    state = {
        dataSource: [],
    };
    
    componentWillMount() {
        console.log('componentWillMount');
        this.fetchData();
    }
    
    FlatListItemSeparator = () => {
        return (
                <View
                style={{
                height: 1,
                width: "100%",
                backgroundColor: "#607D8B",
                }}
                />
                );
    }
    
    fetchData = async () => {
        fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
              //this.state.data = responseJson;
              console.log(this.state.data);
              this.setState({ dataSource: responseJson.movies});
              })
        .catch((error) => {
               console.error(error);
               });
    }
    
    render() {
        return (
                <View style={styles.container}>
                <Text style={styles.item}>Title - Release Year</Text>
                <View
                style={{
                height: 1,
                width: "100%",
                backgroundColor: "#607D8B",
                }}
                />
                <FlatList
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                data={this.state.dataSource}
                renderItem={({item}) =>
                <Text style={styles.item}>{item.title} - {item.releaseYear}</Text>
                }
                keyExtractor={(item, index) => item.title}
                />
                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 paddingTop: 22
                                 },
                                 item: {
                                 padding: 10,
                                 fontSize: 18,
                                 height: 44,
                                 },
                                 })
