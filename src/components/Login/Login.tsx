import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { gameStateAtom, nameState } from '../../atoms';
import { Button } from '../Button/Button';
import { SpeechBox } from '../SpeechBox/SpeechBox';
import { Textbox } from '../Textbox/Textbox';
import './Login.scss';

export const Login = () => {
  const setRecoilName = useSetRecoilState(nameState);
  const [name, setName] = useState<string>('');
  const [gameState, setGameState] = useRecoilState(gameStateAtom);

  return (
    <div className={'startup'}>
      <span className={'title'}>
        Typing
        <br />
        Tuesdays
      </span>
      <SpeechBox script={['Hello! Please type your name']} />
      <form>
        <Textbox
          name={'name'}
          onChange={(e) => setName(e.target.value)}
          value={name}
          autofocus={true}
        />
        <Button
          type={'submit'}
          onClick={(e) => {
            e.preventDefault();
            setRecoilName(name);
            setGameState('menu');
          }}>
          Start!
        </Button>
      </form>
    </div>
  );
};
