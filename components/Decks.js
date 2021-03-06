import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { white, black, gray, lightGray } from '../utils/colors';
import DeckView from './DeckView';
import { getDecks } from '../utils/api';

export default class Decks extends Component {

  state = {
    decks: {}
  }

  componentWillMount() {
    getDecks()
    .then((results) => {
      const decks = results['decks']
      this.setState({ decks })
    })
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.navigation.state.params !== null && nextProps.navigation.state.params.updated !== null) {
      getDecks()
      .then((results) => {
        const decks = results['decks']
        this.setState({ decks })
      })
    }
    else {
      return false
    }
  }

  render() {

    const { decks } = this.state

    if (Object.keys(decks).length === 0) {
      return (
          <View style={styles.container}>
            <View style={styles.item}>
              <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate(
                'NewDeck'
              )}>
                <Text style={{textAlign: 'center'}}>No Decks Available.{"\n"} Click Me To Add One 😀!</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
    }
    else {
      return (
          <ScrollView style={styles.container}>
          {Object.keys(decks).map((deck) => {

            const { title, questions } = decks[deck]

            return (
              <View key={deck} style={styles.item}>
                <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate(
        					'DeckView',
        					{ deckId: deck, title, questions }
        				)}>
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
