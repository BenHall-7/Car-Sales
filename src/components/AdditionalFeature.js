import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      <button
        className="button"
        onClick={e => {
          // Add an onClick that will let you add a feature to your car
          e.preventDefault();
          props.addFeature(props.feature);
        }}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
