import { SET_ALERT, REMOVE_ALERT } from '../types';
import { Alert } from './alert-context';

interface OwnProps {}

type Props = OwnProps;

//@ts-ignore
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert: Alert) => alert.id !== action.payload);

    default:
      return state;
  }
};
