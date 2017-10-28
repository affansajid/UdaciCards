import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { white, black, gray, lightGray } from '../utils/colors';

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

  render() {
    const { deckId, title } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add card to {title}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({question: text})}
          value={this.state.text}
          placeholder="Question"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({answer: text})}
          value={this.state.text}
          placeholder="Answer"
        />
        <TouchableOpacity style={styles.buttonDark}>
          <Text style={styles.buttonTextLight}>Submit</Text>
        </TouchableOpacity>
        <View style={{ height: 40 }} />
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
    marginTop: 10
  },
  buttonTextLight: {
    fontSize: 16,
    color: white
  }
});
