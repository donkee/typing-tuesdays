import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { speak } from '../../utils/Speech';
import './SpeechBox.scss';

interface SpeechBoxProps {
  text: string;
}

export const SpeechBox = (props: SpeechBoxProps) => {
  // this code is modified from https://codersblock.com/blog/javascript-text-to-speech-and-its-many-quirks/
  const [markedText, setMarkedText] = useState<string>('');

  const handleBoundary = (event: any) => {
    if (event.target === 'sentence') {
      // we only care about word boundaries
      return;
    }

    const wordStart = event.charIndex;

    let wordLength = event.charLength;
    if (wordLength === undefined) {
      // Safari doesn't provide charLength, so fall back to a regex to find the current word and its length (probably misses some edge cases, but good enough for this demo)
      const match = props.text.substring(wordStart).match(/^[a-z\d']*/i);
      if (match === null || match.length === 0) return;
      wordLength = match[0].length;
    }

    // wrap word in <mark> tag
    const wordEnd = wordStart + wordLength;
    const word = props.text.substring(wordStart, wordEnd);
    setMarkedText(
      props.text.substring(0, wordStart) +
        '<mark>' +
        word +
        '</mark>' +
        props.text.substring(wordEnd)
    );
  };

  useEffect(() => {
    speak(props.text, handleBoundary, () => setMarkedText(props.text));
  }, []);

  return <SpeechText text={markedText} />;
};

const SpeechText = (props: { text: string }) => {
  return <div>{parse(props.text)}</div>;
};
