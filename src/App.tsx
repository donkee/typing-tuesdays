import React from 'react';
import { useRecoilValue } from 'recoil';
import { nameState } from './atoms';
import { Game } from './components/Game/Game';
import { Login } from './components/Login/Login';

const App = () => {
  const name = useRecoilValue(nameState);

  return name === '' ? <Login /> : <Game />;
};

export default App;
