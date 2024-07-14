import GameStatistics from '../domain/GameStatistics';

export default class GameStatisticsFactory {
  newGameStatistics(guessBoxRandomWordContainer) {
    return GameStatistics.builder()
        .guesses(guessBoxRandomWordContainer.sumGuesses())
        .goodGuesses(guessBoxRandomWordContainer.sumGoodGuesses())
        .wordsLength(guessBoxRandomWordContainer.getWordsLength())
        .wordsSortedByGoodGuessRatioAsc(
            guessBoxRandomWordContainer.getWordsSortedByGoodGuessRatioAsc())
        .chosenDictionaryLength(
            guessBoxRandomWordContainer.getChosenDictionaryLength())
        .build();
  }
}
