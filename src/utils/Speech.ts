let voices = speechSynthesis.getVoices();
let utterance = new SpeechSynthesisUtterance();

speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
  voices = voices.filter((v) => v.lang === 'en-US');
  utterance.voice = voices[5];
};

export const speak = (
  text: string,
  handleBoundary: (event: Event) => void,
  handleEnd: () => void
) => {
  utterance.text = text;
  utterance.addEventListener('boundary', handleBoundary);
  utterance.addEventListener('end', handleEnd);
  speechSynthesis.speak(utterance);
};
