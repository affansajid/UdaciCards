import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { white, black, gray, lightGray } from '../utils/colors';
import NewQuestion from './NewQuestion';
import QuizView from './QuizView';

export default class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params

		return {
			title
		}
	}

  toQuiz(deckId, title) {
    this.props.navigation.navigate(
      'NewQuestion',
      { deckId, title }
    )
  }

  render() {
    const { deckId, title, questions } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.card_count}>{questions.length} {questions.length === 1 ? 'card' : 'cards'}</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.toQuiz(deckId, title)}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        {questions.length >= 1 &&
          <TouchableOpacity style={styles.buttonDark} onPress={() => this.props.navigation.navigate(
            'QuizView',
            { deckId, title, questions }
          )}>
            <Text style={styles.buttonTextLight}>Start Quiz</Text>
          </TouchableOpacity>
        }
      </View>
    )
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
  button: {
    borderWidth: 1,
    borderColor: black,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: white,
    marginTop: 10,
    width: 200
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
  buttonText: {
    fontSize: 16,
    color: black,
    textAlign: 'center'
  },
  buttonTextLight: {
    fontSize: 16,
    color: white,
    textAlign: 'center'
  }
});
