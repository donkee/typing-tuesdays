import React, { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

export const Button = ({ type = 'button', onClick, children }: ButtonProps) => {
  return (
    <button className={'button'} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
