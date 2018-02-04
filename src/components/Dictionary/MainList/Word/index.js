import React from 'react';
import PropTypes from 'prop-types';
import Translation from './Translation';

const Word = ({ word, data }) => (
  <div className="word" key={word}>
    <strong>{word}</strong>
    <div className="word__translation lead">
      {[...data.get(word)].map(el => (
        <Translation key={el} translation={el} data={data} word={word} />
        ))}
    </div>
  </div>);

Word.propTypes = {
  word: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Map).isRequired,
};

export default Word;
