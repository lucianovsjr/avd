import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Header />
    <Home />
    <GlobalStyle />
    </>
  );
}

export default App;
