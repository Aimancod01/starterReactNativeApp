import React from 'react';
import Screen from './navigation/Screen';
import {AuthProvider} from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Screen />
    </AuthProvider>
  );
}

export default App;
