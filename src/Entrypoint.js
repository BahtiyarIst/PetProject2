import React, {useContext, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthContext from './context/auth/AuthContext';
import MainScreens from './navigation/MainScreens';
import LoginScreens from './navigation/LoginScreens';

const Entrypoint = () => {
  const authContext = useContext(AuthContext);

  const {isSigned} = authContext;
  console.log('isSigned: ', isSigned);
  return (
    <NavigationContainer>
      {isSigned ? <MainScreens /> : <LoginScreens />}
    </NavigationContainer>
  );
};

export default Entrypoint;
