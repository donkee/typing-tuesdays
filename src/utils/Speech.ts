let allVoices = speechSynthesis.getVoices();
let utterance = new SpeechSynthesisUtterance();

const allVoicesObtained = new Promise<SpeechSynthesisVoice[]>(function (
  resolve,
  reject
) {
  allVoices = speechSynthesis.getVoices();
  if (allVoices.length !== 0) {
    resolve(allVoices.filter((v) => v.lang === 'en-US'));
  } else {
    speechSynthesis.addEventListener('voiceschanged', function () {
      allVoices = speechSynthesis.getVoices();
      resolve(allVoices.filter((v) => v.lang === 'en-US'));
    });
  }
});

export const speak = (
  text: string,
  handleBoundary: (event: Event) => void,
  handleEnd: () => void
) => {
  allVoicesObtained.then((voices: SpeechSynthesisVoice[]) => {
    utterance.text = text;
    utterance.voice = voices[3];
    utterance.addEventListener('boundary', handleBoundary);
    utterance.addEventListener('end', handleEnd);
    speechSynthesis.speak(utterance);
  });
};
