import React from 'react';
import {Config} from '../../../config/Config';
import {GuessBoxModes} from './../constants/GuessBoxModes';
import {hungarian} from './../languages/Hungarian';
import AlertBox from './../../common/components/AlertBox';
import GuessForm from './GuessForm';
import GiveUpBox from './GiveUpBox';
import Statistics from './Statistics';
import GuessBoxRandomWordContainer from '../domain/GuessBoxRandomWordContainer';
import GameStatisticsFactory from '../factory/GameStatisticsFactory';

export default class GuessBox extends React.Component {
  constructor(props) {
    super(props);
    this.randomWords
      = new GuessBoxRandomWordContainer(props.match.params.category);
    this.gameStatisticsFactory = new GameStatisticsFactory();
    this.setMessageOptions = this.setMessageOptions.bind(this);
    this.giveUp = this.giveUp.bind(this);
    this.updateWord = this.updateWord.bind(this);
    this.initalize = this.initalize.bind(this);
    this.initalize();

    this.state = {
      mode: GuessBoxModes.GUESS,
      selectedLanguage: hungarian,
      currentWord: this.randomWords.getRandom(),
    };
  }

  initalize() {
    this.randomWords.addNewWords(Config.NUMBER_OF_WORDS_TO_ADD);
  }

  setMessageOptions(messageOptions) {
    this.setState({messageOptions: messageOptions});
  }

  giveUp(word) {
    this.state.currentWord.bookBadGuess();
    this.setState({
      mode: GuessBoxModes.GIVE_UP,
      solution: word,
    });
  }

  updateWord() {
    this.setState({
      messageOptions: null,
      mode: GuessBoxModes.GUESS,
      currentWord: this.randomWords.getRandom(),
    });
  }

  render() {
    this.randomWords.addNewWordsIfNeeded();

    const statistics
      = this.gameStatisticsFactory.newGameStatistics(this.randomWords);

    return (
      <div>
        <AlertBox messageOptions={this.state.messageOptions} />
        {this.state.mode === GuessBoxModes.GUESS ?
          <GuessForm
            currentWord={this.state.currentWord}
            selectedLanguage={this.state.selectedLanguage}
            setMessageOptions={this.setMessageOptions}
            giveUp={this.giveUp}
            updateWord={this.updateWord} /> : null}

        {this.state.mode === GuessBoxModes.GIVE_UP ?
          <GiveUpBox
            answer={this.state.currentWord.answer}
            updateWord={this.updateWord} /> : null}
        <Statistics statistics={statistics} />
      </div>
    );
  }
}
