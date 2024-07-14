import GuessBoxRandomWord from '../domain/GuessBoxRandomWord';

export default class GuessBoxRandomWordFactory {
  newGuessBoxRandomWord(word) {
    return GuessBoxRandomWord.builder()
        .question(word.question)
        .description(word.description)
        .answer(word.answer)
        .acceptableAnswers(word.acceptableAnswers)
        .category(word.category)
        .build();
  }

  newGuessBoxRandomWords(words) {
    const mappedWords = [];

    words.forEach((word) => {
      mappedWords.push(this.newGuessBoxRandomWord(word));
    });

    return mappedWords;
  }
}
