import Konva from 'konva';
import React, { useRef, useState } from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import { useRecoilState } from 'recoil';
import { nameState } from '../../atoms';
import { Button } from '../Button/Button';
import { SpeechBox } from '../SpeechBox/SpeechBox';
import './Shapes.scss';

export const Shapes = () => {
  const [name, setName] = useRecoilState(nameState);
  const [success, setSuccess] = useState(false);
  const script: string[] = [
    "Alright! Let's get started!",
    'Can you find the red square?'
  ];

  const rect = useRef<Konva.Rect>(null);
  const rotate = () => {
    rect.current?.rotation(0);
    rect.current?.to({
      rotation: 360,
      duration: 0.5
    });
  };

  return (
    <div className={'game'}>
      <div className={'controls'}>
        <SpeechBox
          script={success ? [`Great job ${name}! You did it!`] : script}
        />
        <Button onClick={() => setName('')}>Logout</Button>
      </div>
      <Stage height={1000} width={1000}>
        <Layer>
          <Rect
            x={0}
            y={0}
            width={1000}
            height={1000}
            fill='rgba(255, 255, 255, 0.1)'
            shadowBlur={10}
          />
          <Rect
            x={70}
            y={100}
            offsetX={50}
            offsetY={50}
            width={100}
            height={100}
            fill='rgb(255,0,0)'
            shadowBlur={20}
            onClick={() => {
              setSuccess(true);
              rotate();
            }}
            ref={rect}
          />
        </Layer>
      </Stage>
    </div>
  );
};
