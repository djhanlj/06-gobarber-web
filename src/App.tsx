import React from 'react';

import SignIn from './pages/SignIn';
import SignUn from './pages/SignUp';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
