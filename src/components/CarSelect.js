import React from 'react';
import Cars from '../Cars';
import CarDescription from './CarDescription';
import {connect} from 'react-redux';
import {selectCar} from '../actions/Actions';

function CarSelect(props) {
  return (
    <div className="box">
      {Cars.map(car => 
        <CarDescription
          car={car}
          key={car.id}
          select={() => {
            props.selectCar(car);
            props.history.push("/features");
          }}
        />
      )}
    </div>
  )
}

export default connect(null, {
  selectCar
})(CarSelect)