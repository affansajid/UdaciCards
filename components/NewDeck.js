import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { white, black, gray, lightGray } from '../utils/colors';

export default class NewDeck extends Component {

  state = {
    deck_title: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({deck_title: text})}
          value={this.state.text}
          placeholder="Title"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View style={{ height: 20 }} />
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
    backgroundColor: white
  },
  buttonText: {
    fontSize: 16,
    color: black
  }
});
