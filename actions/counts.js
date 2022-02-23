import {COUNTER_CHANGE} from '../constants';

export const increment = () => {
  return {
    type: 'increment',
  };
};

export const decrement = () => {
  return {
    type: 'decrement',
  };
};
