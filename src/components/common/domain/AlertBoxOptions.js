export default class AlertBoxOptions {
  static builder() {
    return new AlertBoxOptionsBuilder();
  }

  constructor() {
    this.message = undefined;
    this.backgroundColor = undefined;
    this.messageTimeout = undefined;
  }

  setMessage(message) {
    this.message = message;
  }

  setBackgroundColor(backgroundColor) {
    this.backgroundColor = backgroundColor;
  }

  setMessageTimeout(messageTimeout) {
    this.messageTimeout = messageTimeout;
  }
}

class AlertBoxOptionsBuilder {
  constructor() {
    this.alertBoxOptions = new AlertBoxOptions();
  }

  message(message) {
    this.alertBoxOptions.setMessage(message);

    return this;
  }

  backgroundColor(backgroundColor) {
    this.alertBoxOptions.setBackgroundColor(backgroundColor);

    return this;
  }

  messageTimeout(messageTimeout) {
    this.alertBoxOptions.setMessageTimeout(messageTimeout);

    return this;
  }

  build() {
    return this.alertBoxOptions;
  }
}
