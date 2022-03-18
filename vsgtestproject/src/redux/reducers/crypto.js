import * as types from '../actions/types';

const initialState = {
  cryptos: [],
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CRYPTO_DATA_REQUEST:
      return {
        loading: true,
        cryptos: [],
      };
    case types.GET_CRYPTO_DATA_SUCCESS:
      return {
        ...state,
        cryptos: action.payload,
        loading: false,
      };
    case types.GET_CRYPTO_DATA_FAIL:
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

export { cryptoReducer };
