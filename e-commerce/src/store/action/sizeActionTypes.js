
import { ADD_COLOR, ADD_SIZE } from './dist/sizeActionTypes';

export const addSize = (size,color) => {
  return {
    type: ADD_SIZE,ADD_COLOR,
    size,color,
  };
};
