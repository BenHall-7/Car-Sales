import React from 'react';

const CarDescription = props => {
  return (
    <div style={{margin: 10}}>
      <button onClick={e => {
        e.preventDefault();
        props.select();
      }}>
        Select
      </button>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </div>
  )
}

export default CarDescription;