import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { white, black, gray, lightGray } from '../utils/colors';
import { addCardToDeck } from '../utils/api';

export default class NewQuestion extends Component {
  static navigationOptions = ({ navigation }) => {

		return {
			title: 'Add Card'
		}
	}

  state = {
    question: '',
    answer: ''
  }

  addCard = () => {
    const { deckId } = this.props.navigation.state.params
    const { question, answer } = this.state

    if (question !== '' && answer !== '') {
      addCardToDeck(deckId, {
        question,
        answer
      })
      .then(() => this.setState({
        question: '',
        answer: ''
      }))      
      .then(() => this.toHome())
    }
  }

  toHome = () => {
    this.props.navigation.navigate(
      'Decks', { update: 'yes' }
    )
	}

  render() {
    const { deckId, title } = this.props.navigation.state.params

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.title}>Add card to {title}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({question: text})}
          value={this.state.question}
          placeholder="Question"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({answer: text})}
          value={this.state.answer}
          placeholder="Answer"
        />
        <TouchableOpacity style={styles.buttonDark} onPress={() => this.addCard()}>
          <Text style={styles.buttonTextLight}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  textInput: {
    width: 200,
    height: 48,
    borderWidth: 0,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    textAlign: 'center'
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
  buttonTextLight: {
    fontSize: 16,
    color: white,
    textAlign: 'center'
  }
});
