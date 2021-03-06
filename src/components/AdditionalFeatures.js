import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';
import {addFeature} from '../actions/Actions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const stateToProps = state => ({
  additionalFeatures: state.optional_features
});

export default connect(
  stateToProps, {
  addFeature
})(AdditionalFeatures);
