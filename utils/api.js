import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'UdaciCards:key';

function setDefaultData () {

  let defaultData = {
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
          },
          {
            question: 'Where do you make Api requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: []
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
      }
    }
  }


  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData))

  return defaultData
}

function formatResults(results) {
  return results === null
    ? setDefaultData()
    : results
}

export function getDecks () {
  return AsyncStorage.getItem(STORAGE_KEY)
  .then(formatResults)
}
