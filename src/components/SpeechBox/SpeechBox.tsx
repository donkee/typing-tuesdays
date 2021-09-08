import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { speak } from '../../utils/Speech';
import './SpeechBox.scss';

interface SpeechBoxProps {
  script: string[];
}

export const SpeechBox = (props: SpeechBoxProps) => {
  // this code is modified from https://codersblock.com/blog/javascript-text-to-speech-and-its-many-quirks/
  const [markedText, setMarkedText] = useState<string>(props.script[0]);
  const [currentText, setCurrentText] = useState(props.script[0]);
  let i: number = 0;

  const incrementText = () => {
    if (i < props.script.length - 1) {
      i++;
      setCurrentText(props.script[i]);
    }
  };

  const handleBoundary = (event: any) => {
    if (event.target === 'sentence') {
      // we only care about word boundaries
      return;
    }

    const wordStart = event.charIndex;

    let wordLength = event.charLength;
    if (wordLength === undefined) {
      // Safari doesn't provide charLength, so fall back to a regex to find the current word and its length (probably misses some edge cases, but good enough for this demo)
      const match = currentText.substring(wordStart).match(/^[a-z\d']*/i);
      if (match === null || match.length === 0) return;
      wordLength = match[0].length;
    }

    // wrap word in <mark> tag
    const wordEnd = wordStart + wordLength;
    const word = currentText.substring(wordStart, wordEnd);
    setMarkedText(
      currentText.substring(0, wordStart) +
        '<mark>' +
        word +
        '</mark>' +
        currentText.substring(wordEnd)
    );
  };

  // speak the text
  useEffect(() => {
    speak(currentText, handleBoundary, () => {
      setMarkedText(currentText);
      incrementText();
    });
  }, [currentText]);

  // update the current text if the script changes
  useEffect(() => {
    setCurrentText(props.script[0]);
  }, [props.script]);

  return <SpeechText text={markedText} />;
};

const SpeechText = (props: { text: string }) => {
  return <div className={'speech'}>{parse(props.text)}</div>;
};
