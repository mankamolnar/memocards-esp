import React from 'react';
import Optional from 'optional-js';
import RandomWordService
  from './../../common/service/randomWordService/RandomWordService';
import AlertBoxOptionsFactory from './../factory/AlertBoxOptionsFactory';
import {KeyCodes} from './../constants/KeyCodes';
import './../css/GuessForm.css';

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.alertBoxOptionsFactory = new AlertBoxOptionsFactory();
    this.randomWordService = new RandomWordService();
    this.checkAnswer = this.checkAnswer.bind(this);
    this.generateNewWord = this.generateNewWord.bind(this);
    this.handlePressEnter = this.handlePressEnter.bind(this);
    this.giveUp = this.giveUp.bind(this);
  }

  checkAnswer() {
    const currentWord = this.props.currentWord;
    const givenAnswer = this.refs.guess.value.trim()
        .toLowerCase()
        .normalize('NFKD');
    const correctAnswer = currentWord.getAnswer()
        .trim()
        .toLowerCase()
        .normalize('NFKD');

    if (givenAnswer === correctAnswer) {
      this.handleGoodAnswer();
    } else if (currentWord.acceptableAnswers.includes(givenAnswer)) {
      this.handleAcceptableAnswer();
    } else {
      this.handleBadAnswer(correctAnswer);
    }
  }

  handleGoodAnswer() {
    this.props.currentWord.bookGoodGuess();
    const messageOptions
      = this.alertBoxOptionsFactory.newCorrectAnswerOptions();
    this.props.setMessageOptions(messageOptions);
    this.generateNewWord(messageOptions.messageTimeout);
  }

  handleAcceptableAnswer() {
    const messageOptions
      = this.alertBoxOptionsFactory.newSynonymAnswerOptions();
    this.props.setMessageOptions(messageOptions);
  }

  handleBadAnswer(correctAnswer) {
    this.props.currentWord.bookBadGuess();
    const messageOptions
      = this.alertBoxOptionsFactory.newIncorrectAnswerOptions(correctAnswer);
    this.props.setMessageOptions(messageOptions);
    this.generateNewWord(messageOptions.messageTimeout);
  }

  generateNewWord(nextGuessTimeout) {
    this.refs.guess.disabled = true;
    setTimeout(() => {
      this.refs.guess.disabled = false;
      this.refs.guess.value = '';
      this.refs.guess.focus();
      this.props.updateWord();
    }, nextGuessTimeout);
  }

  handlePressEnter(event) {
    const pressedKey = event.which || event.keyCode;

    if (pressedKey === KeyCodes.ENTER) {
      this.checkAnswer();
    }
  }

  giveUp() {
    this.props.giveUp(this.props.currentWord);
  }

  render() {
    const optionalRandomWord = Optional.ofNullable(this.props.currentWord);

    if (!optionalRandomWord.isPresent()) return null;

    return (
      <div className='guess-form-container'>
        <div>
          {optionalRandomWord.get().getQuestion()}
        </div>
        <div>
          {optionalRandomWord.get().getDescription()}
        </div>
        <div>
          <input type='text' ref='guess' onKeyPress={this.handlePressEnter} />
        </div>
        <button onClick={this.checkAnswer}>
          {this.props.selectedLanguage.SUBMIT}
        </button>
        <button onClick={this.giveUp}>
          {this.props.selectedLanguage.GIVE_UP}
        </button>
      </div>
    );
  }
}
