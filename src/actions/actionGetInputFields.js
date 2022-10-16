import { GET_INPUT_FIELDS } from "./actionType";

export const getInputFields = (data) => {
  return {
    type: GET_INPUT_FIELDS,
    data,
  };
};
