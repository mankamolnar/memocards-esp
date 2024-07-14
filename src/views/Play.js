import React from 'react';
import GuessBox from './../components/guessBox/components/GuessBox';

export default class Play extends React.Component {
  // TODO: use context instead of passing props
  render() {
    return (
      <GuessBox {...this.props} />
    );
  }
}
