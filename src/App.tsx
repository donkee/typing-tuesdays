import * as React from 'react';
import { Layer, Rect, Stage } from 'react-konva';

const App = () => {
  let voices = speechSynthesis.getVoices();

  speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
    voices = voices.filter((v) => v.lang === 'en-US');
  };

  const speak = () => {
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = 'click on the rectangle';
    utterance.voice = voices[5];
    utterance.lang = 'en-us';
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button onClick={speak}>Speak</button>
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

export default App;
