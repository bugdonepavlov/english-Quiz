import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import Word from './Word';

const MainList = ({ data, removeTranslation }) => (
  <div>
    {data && <ul className="list-group">
      {[...data.keys()].sort().map(word => (
        <li className="list-group-item" key={word}>
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <Word key={word} word={word} data={data} removeTranslation={removeTranslation} />
            </div>
            <div className="col-auto">
              <Buttons
                word={word}
                translation={data.get(word)}
              />
            </div>
          </div>
        </li>))}
    </ul>}
  </div>);

export default MainList;

MainList.propTypes = {
  data: PropTypes.string.isRequired,
  removeTranslation: PropTypes.func.isRequired,
};
