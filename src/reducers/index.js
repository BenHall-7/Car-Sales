import {ADD_FEATURE, REMOVE_FEATURE, SELECT_CAR} from '../actions/Actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FEATURE: {
      return {
        ...state,
        features: [
          ...state.features,
          action.payload,
        ]
      };
    }
    case REMOVE_FEATURE: {
      let features = [...state.features].filter(feat => {
        return feat.id !== action.payload.id
      });
      return {
        ...state,
        features
      }
    }
    case SELECT_CAR: return action.payload;
    default: return state;
  }
}