import React from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import { useRecoilState } from 'recoil';
import { nameState } from '../../atoms';
import { SpeechBox } from '../SpeechBox/SpeechBox';

export const Game = () => {
  const [name, setName] = useRecoilState(nameState);

  return (
    <div>
      <button onClick={() => setName('')}>Clear Name</button>
      <SpeechBox text={`Hello ${name}. Let's get started!`} />
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={50}
            width={100}
            height={100}
            fill='red'
            shadowBlur={10}
            onClick={() => alert('Great job!')}
          />
        </Layer>
      </Stage>
    </div>
  );
};
