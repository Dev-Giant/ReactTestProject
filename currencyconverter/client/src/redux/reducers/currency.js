import * as types from '../actions/types';

const initialState = {
  rate: 1.95,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_RATE_SUCCESS:
      return {
        ...state,
        rate: action.payload,
        loading: false,
      };
    case types.FETCH_RATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export { currencyReducer };
