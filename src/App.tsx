import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { gameStateAtom, nameState } from './atoms';
import { Login } from './components/Login/Login';
import { Menu } from './components/Menu/Menu';
import { Shapes } from './components/Shapes/Shapes';

const App = () => {
  const name = useRecoilValue(nameState);
  const [gameState, setGameState] = useRecoilState(gameStateAtom);

  if (name === '') {
    setGameState('title');
    return <Login />;
  } else if (name !== '' && gameState === 'title') {
    setGameState('menu');
    return <Menu />;
  }

  switch (gameState) {
    case 'menu':
      return <Menu />;
    case 'letters':
      return <Login />;
    case 'shapes':
      return <Shapes />;
    default:
    case 'title':
      return <Login />;
  }
};

export default App;
