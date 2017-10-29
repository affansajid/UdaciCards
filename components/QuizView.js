import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { white, black, gray, green, red } from '../utils/colors';
import NewQuestion from './NewQuestion';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

export default class QuizView extends Component {
  static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params

		return {
			title: `Quiz on ${title}`
		}
	}

  state = {
    count: 0,
    flipped: 'no',
    correct: 0
  }

  componentWillUnmount() {
    clearLocalNotification()
    .then(setLocalNotification)       
    this.setState({
      count: 0,
      flipped: 'no',
      correct: 0
    })
  }

  restartQuiz() {
    this.setState({
      count: 0,
      flipped: 'no',
      correct: 0
    })
  }

  backToDeck() {
    this.props.navigation.goBack()
  }

  toggleCard = () => {
    const flipVar = (this.state.flipped === 'no' ? 'yes' : 'no')

    this.setState({
      flipped: flipVar
    })
  }

  nextQuestion = (answer) => {
    const currentCount = this.state.count
    const currentCorrect = this.state.correct

    if (answer === 'correct') {
      this.setState({
        count: currentCount + 1,
        correct: currentCorrect + 1
      })
    }
    else {
      this.setState({
        count: currentCount + 1
      })
    }
  }

  render() {
    const { deckId, title, questions } = this.props.navigation.state.params
    const { count, flipped, correct } = this.state

    if (count === questions.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Quiz Complete</Text>
          <Text style={styles.text}>Here is your percentage score</Text>
          <Text style={styles.text}>You got {correct} of {questions.length} correct</Text>
          <Text style={styles.percentage}>{((correct/questions.length) * 100).toFixed(0)}%</Text>

          <TouchableOpacity style={styles.buttonDark} onPress={() => this.restartQuiz()}>
            <Text style={styles.buttonTextLight}>Restart Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDark} onPress={() => this.backToDeck()}>
            <Text style={styles.buttonTextLight}>Back To Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else if (questions.length >= 1) {
      return (
        <View style={styles.container}>
          <Text style={styles.count}>{count + 1} / {questions.length}</Text>

          {flipped === 'no' &&
          <TouchableOpacity style={styles.questionCard} onPress={this.toggleCard}>
              <Text style={styles.question}>{questions[count].question}</Text>
              <Text style={styles.flipButton}>Answer</Text>
          </TouchableOpacity>
          }
          {flipped === 'yes' &&
          <TouchableOpacity style={styles.questionCard} onPress={this.toggleCard}>
              <Text style={styles.question}>{questions[count].answer}</Text>
              <Text style={styles.flipButton}>Question</Text>
          </TouchableOpacity>
          }

          <TouchableOpacity style={styles.buttonCorrect} onPress={() => this.nextQuestion('correct')}>
            <Text style={styles.buttonTextLight}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIncorrect} onPress={() => this.nextQuestion('incorrect')}>
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
  question: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10
  },
  questionCard: {
    padding: 10
  },
  flipButton: {
    textAlign: 'center',
    color: red,
    marginTop: 10
  },
  count: {
    color: gray,
    fontSize: 20,
    position: 'absolute',
    top: 10,
    left: 10
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  percentage: {
    textAlign: 'center',
    fontSize: 32,
    margin: 10
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
