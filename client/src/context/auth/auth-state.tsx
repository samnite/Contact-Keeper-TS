import React, { useReducer } from 'react';
import AuthContext, { FormDataTypes } from './auth-context';
import authReducer from './auth-reducer';
import setAuthToken from '../../utils/set-auth-token';
import axios from 'axios';
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
import Config from '../../utils/config';

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
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/auth');
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };
  // Register User
  const register = async (formData: FormDataTypes) => {
    try {
      const res = await axios.post('/api/users', formData, Config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      if (err.response.data.errors) {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response.data.errors[0].msg
        });
      } else {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response.data.msg
        });
      }
    }
  };

  // Login User
  const login = async (formData: FormDataTypes) => {
    try {
      const res = await axios.post('/api/auth', formData, Config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      if (err.response.data.errors) {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response.data.errors[0].msg
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response.data.msg
        });
      }
    }
  };
  // Logout
  const logout = () => dispatch({ type: LOGOUT });
  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
