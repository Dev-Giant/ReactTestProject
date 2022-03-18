import * as types from './types';
import * as api from '../../api';

export const getCryptoData = () => async dispatch => {
  try {
    dispatch({ type: types.GET_CRYPTO_DATA_REQUEST});
    const data = await api.fetchCryptoData();
    let receiveddata = data.data.data;
    data.data.data.map((element, index) => {
      element.id = index + 1;
    });
    dispatch({ type: types.GET_CRYPTO_DATA_SUCCESS, payload: receiveddata });
  } catch (error) {
    dispatch({ type: types.GET_CRYPTO_DATA_FAIL, payload: error.message });
  }
}