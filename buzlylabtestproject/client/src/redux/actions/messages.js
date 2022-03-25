import * as types from './types';
import * as api from '../../api';

export const fetchMessages = () => async dispatch => {
  try {
    dispatch({ type: types.FETCH_MESSAGES_REQUEST });
    const { data } = await api.fetchMessages();
    dispatch({ type: types.FETCH_MESSAGES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.FETCH_MESSAGES_FAIL, payload: error.message });
  }
};

export const fetchSingleMessage = id => async dispatch => {
  try {
    dispatch({ type: types.FETCH_SINGLE_MESSAGE_REQUEST });
    const { data } = await api.fetchSingleMessage(id);
    dispatch({ type: types.FETCH_SINGLE_MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.FETCH_SINGLE_MESSAGE_FAIL, payload: error.message });
  }
};

export const createMessage = message => async dispatch => {
  try {
    dispatch({ type: types.CREATE_MESSAGE_REQUEST, payload: message });
    const { data } = await api.createMessage(message);
    dispatch({
      type: types.CREATE_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: types.CREATE_MESSAGE_FAIL, payload: error.message });
  }
};