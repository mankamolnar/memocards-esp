import AlertBoxOptions from './../../common/domain/AlertBoxOptions';
import {hungarian} from './../languages/Hungarian';

export default class AlertBoxOptionsFactory {
  constructor() {
    this.selectedLanguage = hungarian;
  }

  newCorrectAnswerOptions() {
    return AlertBoxOptions.builder()
        .message(this.selectedLanguage.CORRECT_ANSWER)
        .backgroundColor('#41d946')
        .messageTimeout(500)
        .build();
  }

  newSynonymAnswerOptions() {
    return AlertBoxOptions.builder()
        .message(this.selectedLanguage.ACCEPTABLE_ANSWER)
        .backgroundColor('#ffff59')
        .messageTimeout(5000)
        .build();
  }

  newIncorrectAnswerOptions(answer) {
    return AlertBoxOptions.builder()
        .message(this.selectedLanguage.INCORRECT_ANSWER + answer)
        .backgroundColor('#ff5454')
        .messageTimeout(5000)
        .build();
  }
}
