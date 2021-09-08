import React, { ChangeEventHandler } from 'react';
import './Textbox.scss';

interface TextboxProps {
  name: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  autofocus?: boolean;
}

export const Textbox = (props: TextboxProps) => {
  return (
    <input
      className={'textbox'}
      type={'text'}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      autoFocus={props.autofocus}
    />
  );
};
