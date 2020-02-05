import React from 'react';
import {connect} from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${
        props.car.features.reduce((sum, feat) => sum + feat.price, 0)
        + props.car.price
      }</h4>
    </div>
  );
};

const stateToProps = state => ({
  car: state,
});

export default connect(
  stateToProps, {}
)(Total);
