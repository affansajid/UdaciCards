import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { white, black, gray, lightGray } from '../utils/colors';
import { saveDeckTitle } from '../utils/api';

export default class NewDeck extends Component {

  state = {
    deck_title: ''
  }

  addDeck = () => {
    const { deck_title } = this.state

    if (deck_title !== '') {
      saveDeckTitle(deck_title)
      .then(() => this.setState({deck_title: ''}))
      .then(() => this.toHome())
    }
  }

  toHome = () => {
    this.props.navigation.navigate(
      'Decks', { update: 'yes' }
    )
	}

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({deck_title: text})}
          value={this.state.deck_title}
          placeholder="Title"
        />
        <TouchableOpacity style={styles.button} onPress={() => this.addDeck()}>
          <Text style={styles.buttonText}>Submit</Text>
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
  textInput: {
    width: 200,
    height: 48,
    borderWidth: 0,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
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
    width: 200
  },
  buttonText: {
    fontSize: 16,
    color: black,
    textAlign: 'center'
  }
});
