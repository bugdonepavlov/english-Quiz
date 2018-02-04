import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListHeader from './ListHeader';
import MainList from './MainList';

const Dictionary = ({ data }) => (
  <div className="container">
    <ListHeader size={data.map.size} />
    <MainList
      data={data.map}
    />
  </div>
);

Dictionary.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.object.isRequired,
  }).isRequired,
};

export default connect(state => ({
  data: state.dictionary.filtred,
}), null)(Dictionary);
