import React from 'react';
import {hungarian} from '../languages/Hungarian';
import './../css/GiveUpBox.css';

class GiveUpBox extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLanguage: hungarian,
    };
  }

  render() {
    return <div className='give-up-box-container'>
      {this.props.answer}<br /><br />

      <button onClick={this.props.updateWord}>
        {hungarian.GIVE_NEW_WORD}
      </button>
    </div>;
  }
}

export default GiveUpBox;
