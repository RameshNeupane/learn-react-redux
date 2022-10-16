import { GET_INPUT_FIELDS } from "../actions/actionType";

const INITIAL_STATE = {
  username: "",
  email: "",
};

export const reducerGetInputFields = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_INPUT_FIELDS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
