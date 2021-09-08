import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { gameStateAtom, nameState } from '../../atoms';
import { Button } from '../Button/Button';
import { SpeechBox } from '../SpeechBox/SpeechBox';
import './Menu.scss';

export const Menu = () => {
  const setGameState = useSetRecoilState(gameStateAtom);
  const name = useRecoilValue(nameState);

  return (
    <div id={'menu'}>
      <SpeechBox
        script={[`Hello ${name}. Which game would you like to play?`]}
      />
      <Button onClick={() => setGameState('shapes')}>Shapes</Button>
      <Button onClick={() => setGameState('shapes')}>Letters</Button>
      <Button onClick={() => setGameState('shapes')}>Animals</Button>
    </div>
  );
};
