import React, { FunctionComponent, useReducer } from 'react';
import AuthContext from './auth-context';
import authReducer from './auth-reducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

interface OwnProps {
  children: any;
}

type Props = OwnProps;

const AuthState = (props: Props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
  };
  //@ts-ignore
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User

  // Register User

  // Login USer

  // Logout

  // Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
