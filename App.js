import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Decks from './components/Decks';
import NewDeck from './components/NewDeck';
import { black, green, white, orange, gray } from './utils/colors';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-list-box" size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-add-circle" size={30} color={tintColor} />
    }
  }
}, {
	navigationOptions: {
		header: null
	},
	tabBarOptions: {
		activeTintColor: black,
    inactiveTintColor: gray,
    indicatorStyle: {
      backgroundColor: orange,
      height: 5
    },
		style: {
			height: 56,
      backgroundColor: white
		}
	}
})

const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs
	}
})

function AppStatusBar ({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight}}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar backgroundColor={black} barStyle='light-content' />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
