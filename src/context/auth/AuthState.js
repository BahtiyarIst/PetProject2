import React, {useReducer} from 'react';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import {LOGOUT, LOGIN_SUCCESS, LOADING, REGISTER_SUCCESS} from '../types';

const AuthState = props => {
  const initialState = {
    error: [],
    isSigned: false,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Login User
  const signin = () => {
    dispatch({
      type: LOGIN_SUCCESS,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        isSigned: state.isSigned,
        signin,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
