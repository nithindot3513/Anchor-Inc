import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Search extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: () => <Icon size={24} name="search" color="#01152d" />
  }

  render() {
    return (
			<View style={{ justifyContent: 'center', alignContent: 'center' }}>
				<Text style={{ alignSelf: 'center' }}>Search</Text>
			</View>
		);
  }
}

export default Search;