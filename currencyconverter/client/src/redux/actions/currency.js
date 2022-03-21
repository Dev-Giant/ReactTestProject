import * as types from './types';
import * as api from '../../api';

export const getRate = (currency1, currency2) => async dispatch => {
  try {
    dispatch({ type: types.FETCH_RATE_REQUEST });
    const { data } = await api.getRate(currency1, currency2);
    dispatch({ type: types.FETCH_RATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.FETCH_RATE_FAIL, payload: error.message });
  }
};