import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'UdaciCards:key';

function setDefaultData () {

  let defaultData = {
    decks: {}
  }


  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData))

  return defaultData
}

function formatResults(results) {

  return results === null
    ? setDefaultData()
    : JSON.parse(results)
}

export function getDecks () {
  return AsyncStorage.getItem(STORAGE_KEY)
  .then(formatResults)
}

export function saveDeckTitle (deck_title) {

  const deck_id = deck_title
  .toString()
  .toLowerCase()
  .replace(/\s+/g, '_')
  .replace(/[^\w\-]+/g, '')
  .replace(/\-\-+/g, '_')
  .replace(/^-+/, '')
  .replace(/-+$/, '');

  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    decks: {
      [deck_id]: {
        title: deck_title,
        questions: []
      }
    }
	}))
}

export function addCardToDeck (deck_id, card) {

  return AsyncStorage.getItem(STORAGE_KEY)
  .then((results) => {
    const decks = JSON.parse(results)['decks']

    const all_questions = decks[deck_id]['questions']
    const title = decks[deck_id]['title']

    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      decks: {
        [deck_id]: {
          title: title,
          questions: [...all_questions, {
            question: card.question,
            answer: card.answer
          }]
        }
      }
  	}))
  })

}
