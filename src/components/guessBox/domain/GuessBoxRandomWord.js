export default class GuessBoxRandomWord {
  static builder() {
    return new GuessBoxRandomWordBuilder();
  }

  constructor() {
    this.question = undefined;
    this.description = undefined;
    this.answer = undefined;
    this.acceptableAnswers = undefined;
    this.category = undefined;
    this.guesses = 0;
    this.goodGuesses = 0;
  }

  bookGoodGuess() {
    this.guesses++;
    this.goodGuesses++;
  }

  bookBadGuess() {
    this.guesses++;
  }

  setQuestion(question) {
    this.question = question;
  }

  setDescription(description) {
    this.description = description;
  }

  setAnswer(answer) {
    this.answer = answer;
  }

  setAcceptableAnswers(acceptableAnswers) {
    this.acceptableAnswers = acceptableAnswers;
  }

  setCategory(category) {
    this.category = category;
  }

  getQuestion() {
    return this.question;
  }

  getDescription() {
    return this.description;
  }

  getAnswer() {
    return this.answer;
  }

  getAcceptableAnswers() {
    return this.acceptableAnswers;
  }

  getCategory() {
    return this.category;
  }

  getGuesses() {
    return this.guesses;
  }

  getGoodGuesses() {
    return this.goodGuesses;
  }

  getBadGuesses() {
    return this.guesses - this.goodGuesses;
  }

  getGoodGuessRatio() {
    const ratio = this.goodGuesses / this.guesses * 100;

    return isNaN(ratio) ? 0 : ratio;
  }
}

class GuessBoxRandomWordBuilder {
  constructor() {
    this.guessBoxRandomWord = new GuessBoxRandomWord();
  }

  question(question) {
    this.guessBoxRandomWord.setQuestion(question);

    return this;
  }

  description(description) {
    this.guessBoxRandomWord.setDescription(description);

    return this;
  }

  answer(answer) {
    this.guessBoxRandomWord.setAnswer(answer);

    return this;
  }

  acceptableAnswers(acceptableAnswers) {
    this.guessBoxRandomWord.setAcceptableAnswers(acceptableAnswers);

    return this;
  }

  category(category) {
    this.guessBoxRandomWord.setCategory(category);

    return this;
  }

  build() {
    return this.guessBoxRandomWord;
  }
}
