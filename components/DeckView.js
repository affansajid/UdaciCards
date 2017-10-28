import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { white, black, gray, lightGray } from '../utils/colors';

export default class DeckView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Deck Title</Text>
        <Text style={styles.card_count}>0 Cards</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDark}>
          <Text style={styles.buttonTextLight}>Start Quiz</Text>
        </TouchableOpacity>
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
    marginTop: 10
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
    marginTop: 10
  },
  buttonText: {
    fontSize: 16,
    color: black
  },
  buttonTextLight: {
    fontSize: 16,
    color: white
  }
});
