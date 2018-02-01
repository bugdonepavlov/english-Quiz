import React from 'react';
import { connect } from 'react-redux';
import { removeTranslation } from 'ducks/dictionary';
import PropTypes from 'prop-types';
import ListHeader from './ListHeader';
import MainList from './MainList';

const Dictionary = ({ data }) => (
  <div className="container">
    <ListHeader size={data.map.size} />
    <MainList
      data={data.map}
      removeTranslation={removeTranslation}
    />
  </div>
);

Dictionary.propTypes = {
  data: PropTypes.oneOfType.isRequired,
  // removeTranslation: PropTypes.func.isRequired,
};

export default connect(state => ({
  data: state.dictionary.filtred,
}), { removeTranslation })(Dictionary);
