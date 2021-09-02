import React from 'react';
import { useRecoilValue } from 'recoil';
import { nameState } from './atoms';
import { FirstStartup } from './components/FirstStartup/FirstStartup';
import { Game } from './components/Game/Game';

const App = () => {
  const name = useRecoilValue(nameState);

  return name === '' ? <FirstStartup /> : <Game />;
};

export default App;
