import {Config} from '../../../config/Config';
import RandomWordService
  from './../../common/service/randomWordService/RandomWordService';

export default class GuessBoxRandomWordContainer {
  constructor(category) {
    this.randomWordService = new RandomWordService(category);
    this.words = [];
  }

  addNewWordsIfNeeded() {
    const wordsToPractice
      = this.getWordsBelowGoodGuessRatio(Config.NEW_WORD_ADD_LIMIT);

    if (wordsToPractice.length === 0) {
      this.addNewWords(Config.NUMBER_OF_WORDS_TO_ADD);
    }
  }

  addNewWords(number) {
    const words = this.randomWordService.getRandomWords(number);
    this.words = this.words.concat(words);
  }

  getRandom() {
    const filteredWords = this.getWordsBelowGoodGuessRatio(
        Config.GOOD_GUESS_RATIO_FILTERING_LIMIT);

    if (filteredWords.length > 0) {
      return filteredWords[Math.floor(Math.random() * filteredWords.length)];
    }

    if ((Math.floor(Math.random() * 3) + 1) % 3 === 0) {
      return this.words[Math.floor(Math.random() * this.words.length)];
    }

    return this.getWordByLowestGoodGuessRatio();
  }

  getWordsBelowGoodGuessRatio(percentage) {
    return this.words.filter((word) => word.getGoodGuessRatio() < percentage);
  }

  getWordsSortedByGoodGuessRatioAsc() {
    const sortedWords = this.words.sort((firstWord, secondWord) => {
      if (firstWord.getGoodGuessRatio() < secondWord.getGoodGuessRatio()) {
        return -1;
      }

      if (firstWord.getGoodGuessRatio() > secondWord.getGoodGuessRatio()) {
        return 1;
      }

      return 0;
    });

    return sortedWords;
  }

  getWordByLowestGoodGuessRatio() {
    return this.getWordsSortedByGoodGuessRatioAsc()[0];
  }

  getWordsLength() {
    return this.words.length;
  }

  getChosenDictionaryLength() {
    return this.randomWordService.getChosenDictionaryLength();
  }

  sumGuesses() {
    return this.words
        .map((word) => word.getGuesses())
        .reduce((summed, currentGuesses) => {
          return summed + currentGuesses;
        });
  }

  sumGoodGuesses() {
    return this.words
        .map((word) => word.getGoodGuesses())
        .reduce((summed, currentGoodGuess) => {
          return summed + currentGoodGuess;
        });
  }
}
