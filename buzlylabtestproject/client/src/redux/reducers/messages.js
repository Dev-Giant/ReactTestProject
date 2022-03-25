import * as types from '../actions/types';

const initialState = {
  messages: [],
  currentMessage: null,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MESSAGES_REQUEST:
      return {
        loading: true,
        messages: [],
      };
    case types.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };
    case types.FETCH_MESSAGES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case types.FETCH_SINGLE_MESSAGE_REQUEST:
      return {
        loading: true,
        messages: [],
      };
    case types.FETCH_SINGLE_MESSAGE_SUCCESS:
      return {
        ...state,
        currentMessage: action.payload,
        loading: false,
      };
    case types.FETCH_SINGLE_MESSAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case types.CREATE_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        loading: false,
      };
    case types.CREATE_MESSAGE_FAIL:
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

export { messageReducer };
