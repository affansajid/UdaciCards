import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { white, black, gray, lightGray } from '../utils/colors';

export default class Decks extends Component {

  state = {
    decks: {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      },
      Redux: {
        title: 'Redux',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      Hello: {
        title: 'Hello',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      },
      Apple: {
        title: 'Apple',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      Orange: {
        title: 'Orange',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
}

  render() {

    const { decks } = this.state

    return (
      <ScrollView style={styles.container}>
      {Object.keys(decks).map((deck) => {

        const { title, questions } = decks[deck]

        return (
          <View key={deck} style={styles.item}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.card_count}>{questions.length} {questions.length === 1 ? 'card' : 'cards'}</Text>
            </TouchableOpacity>
          </View>
        )
      })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: lightGray
  },
  item: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: 15
	},
  card: {
    backgroundColor: white,
		borderRadius: 3,
		padding: 20,
		justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  card_count: {
    color: gray,
    fontSize: 20,
    textAlign: 'center',
  }
});
