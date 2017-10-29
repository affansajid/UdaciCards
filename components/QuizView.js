import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { white, black, gray, green, red } from '../utils/colors';
import NewQuestion from './NewQuestion';

export default class QuizView extends Component {
  static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params

		return {
			title: `Quiz on ${title}`
		}
	}

  componentWillUnmount() {
    console.log('Unmounting')
  }


  render() {
    const { deckId, title, questions } = this.props.navigation.state.params

    if (questions.length >= 1) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>

          <TouchableOpacity style={styles.buttonCorrect}>
            <Text style={styles.buttonTextLight}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIncorrect}>
            <Text style={styles.buttonTextLight}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>No cards in this deck</Text>

          <TouchableOpacity style={styles.buttonDark} onPress={() => this.props.navigation.navigate(
            'NewQuestion',
            { deckId, title }
          )}>
            <Text style={styles.buttonTextLight}>Add a card</Text>
          </TouchableOpacity>
        </View>
      )
    }

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    padding: 20
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  },
  card_count: {
    color: gray,
    fontSize: 20,
    textAlign: 'center',
  },
  buttonDark: {
    borderWidth: 1,
    borderColor: black,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: black,
    marginTop: 10,
    width: 200
  },
  buttonCorrect: {
    borderWidth: 1,
    borderColor: green,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: green,
    marginTop: 10,
    width: 200
  },
  buttonIncorrect: {
    borderWidth: 1,
    borderColor: red,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: red,
    marginTop: 10,
    width: 200
  },
  buttonTextLight: {
    fontSize: 16,
    color: white,
    textAlign: 'center'
  }
});
