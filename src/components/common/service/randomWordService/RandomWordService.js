import {hungarianThaiDictionary} from './dictionary/HungarianThai';
import {thaiHungarianDictionary} from './dictionary/ThaiHugarian';
import GuessBoxRandomWordFactory
  from '../../../guessBox/factory/GuessBoxRandomWordFactory';

export default class RandomWordService {
  constructor(category) {
    this.guessBoxRandomWordFactory = new GuessBoxRandomWordFactory();
    this.setRandomChosenDictionary = this.setRandomChosenDictionary.bind(this);
    this.usedIndexes = [];
    this.chosenDictionary = this.getRandomDictionary();
    this.category = category;
  }

  getRandomWords(number) {
    this.setRandomChosenDictionary();
    const words = [];

    for (let i = 0; i < number; i++) {
      if (this.chosenDictionary.length !== this.usedIndexes.length) {
        const randomWord = this.chosenDictionary[this.getRandomUnusedIndex()];

        words.push(randomWord);
      }
    }

    return this.guessBoxRandomWordFactory.newGuessBoxRandomWords(words);
  }

  getRandomDictionary() {
    return Math.floor(Math.random() * 2) === 0
      ? hungarianThaiDictionary.length > 0
        ? hungarianThaiDictionary : thaiHungarianDictionary
      : thaiHungarianDictionary.length > 0
        ? thaiHungarianDictionary : hungarianThaiDictionary;
  }

  setRandomChosenDictionary() {
    this.chosenDictionary = this.getRandomDictionary().filter((element) => {
      return element.category === this.category;
    });
  }

  getRandomUnusedIndex() {
    let randomIndex = undefined;

    do {
      randomIndex = this.getRandomIndex();
    } while (this.usedIndexes.includes(randomIndex));

    this.usedIndexes.push(randomIndex);

    return randomIndex;
  }

  getRandomIndex() {
    return Math.floor(Math.random() * this.chosenDictionary.length);
  }

  getChosenDictionaryLength() {
    return this.chosenDictionary.length;
  }
}
