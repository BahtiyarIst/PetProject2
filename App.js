import 'react-native-gesture-handler';
import React from 'react';
import Entrypoint from './src/Entrypoint';
import AuthState from './src/context/auth/AuthState';

const App = () => {
  return (
    <AuthState>
      <Entrypoint />
    </AuthState>
  );
};

export default App;
