export const ADD_FEATURE = "ADD_FEATURE";

export function addFeature(feature) {
  return {
    type: ADD_FEATURE,
    payload: feature
  }
};

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function removeFeature(feature) {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  }
}

export const SELECT_CAR = "SELECT_CAR";

export function selectCar(car) {
  return {
    type: SELECT_CAR,
    payload: car,
  }
}