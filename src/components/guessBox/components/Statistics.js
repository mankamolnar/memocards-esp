import React from 'react';
import './../css/Statistics.css';

// TODO: Pass Language as prop
const Statistics = (props) => {
  return (
    <React.Fragment>
      <div className='statistics-left-panel'>
        <div>Összes Tipp</div>
        <div>{props.statistics.getGuesses()}</div>
        <div>Jó Tippek Száma</div>
        <div>{props.statistics.getGoodGuesses()}</div>
        <div>Összes játékban lévő szó</div>
        <div>{props.statistics.getWordsLength()}</div>
        <div>Szótár mérete</div>
        <div>{props.statistics.getChosenDictionaryLength()}</div>
      </div>
      <div id='statistics-right-panel'>
        <div>Szavak nehézség szerint</div>
        {
          props.statistics.getWordsSortedByGoodGuessRatioAsc()
              .map((word, index) => {
                return (
                  <div key={'sortedWord' + index}>
                    {word.getQuestion()} - {word.getGoodGuessRatio().toFixed(2)}
                  </div>
                );
              })
        }
      </div>
    </React.Fragment>
  );
};

export default Statistics;
