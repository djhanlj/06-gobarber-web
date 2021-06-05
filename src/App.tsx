import React from 'react';

import SignIn from './pages/SignIn';
import SignUn from './pages/SignUp';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <SignUn />
      <GlobalStyle />
    </>
  );
};

export default App;
