import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext, { Alert } from './alert-context';
import alertReducer from './alert-reducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

interface OwnProps {
  children: any;
}

type Props = OwnProps;

const AlertState = (props: Props) => {
  const initialState: Alert[] = [];
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg: string, type: string, timeout = 5000) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
        id
      }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
