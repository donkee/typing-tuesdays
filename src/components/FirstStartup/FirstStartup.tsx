import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { nameState } from '../../atoms';
import './FirstStartup.scss';

export const FirstStartup = () => {
  const [recoilName, setRecoilName] = useRecoilState<string>(nameState);
  const [name, setName] = useState<string>('');

  return (
    <div className={'startup'}>
      Hello! What is your name?
      <form>
        <input
          type={'text'}
          name={'name'}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type={'submit'}
          value={'Start!'}
          onClick={(e) => {
            e.preventDefault();
            setRecoilName(name);
          }}
        />
      </form>
    </div>
  );
};
