export default class GameStatistics {
  static builder() {
    return new GameStatisticsBuilder();
  }

  constructor() {
    this.guesses = undefined;
    this.goodGuesses = undefined;
    this.wordsSortedByGoodGuessRatioAsc = [];
    this.wordsLength = undefined;
    this.chosenDictionaryLength = undefined;
  }

  setGuesses(guesses) {
    this.guesses = guesses;
  }

  setGoodGuesses(goodGuesses) {
    this.goodGuesses = goodGuesses;
  }

  setWordsSortedByGoodGuessRatioAsc(sortedWords) {
    this.wordsSortedByGoodGuessRatioAsc = sortedWords;
  }

  setWordsLength(wordsLength) {
    this.setWordsLength = wordsLength;
  }

  setChosenDictionaryLength(chosenDictionaryLength) {
    this.chosenDictionaryLength = chosenDictionaryLength;
  }

  getGuesses() {
    return this.guesses;
  }

  getGoodGuesses() {
    return this.goodGuesses;
  }

  getWordsSortedByGoodGuessRatioAsc() {
    return this.wordsSortedByGoodGuessRatioAsc;
  }

  getWordsLength() {
    return this.setWordsLength;
  }

  getChosenDictionaryLength() {
    return this.chosenDictionaryLength;
  }
}

class GameStatisticsBuilder {
  constructor() {
    this.gameStatistics = new GameStatistics();
  }

  guesses(guesses) {
    this.gameStatistics.setGuesses(guesses);

    return this;
  }

  goodGuesses(goodGuesses) {
    this.gameStatistics.setGoodGuesses(goodGuesses);

    return this;
  }

  wordsSortedByGoodGuessRatioAsc(sortedWords) {
    this.gameStatistics.setWordsSortedByGoodGuessRatioAsc(sortedWords);

    return this;
  }

  wordsLength(wordsLength) {
    this.gameStatistics.setWordsLength(wordsLength);

    return this;
  }

  chosenDictionaryLength(chosenDictionaryLength) {
    this.gameStatistics.setChosenDictionaryLength(chosenDictionaryLength);

    return this;
  }

  build() {
    return this.gameStatistics;
  }
}
