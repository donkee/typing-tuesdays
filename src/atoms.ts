import { atom, DefaultValue } from 'recoil';

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: { setSelf: any; onSet: any }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: string | DefaultValue) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export const nameState = atom({
  key: 'nameState',
  default: '',
  effects_UNSTABLE: [localStorageEffect('name')]
});

export const gameStateAtom = atom<GameState>({
  key: 'gameState',
  default: 'title',
  // cancel any speaking when the game state changes
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((v) => speechSynthesis.cancel());
    }
  ]
});

export type GameState = 'title' | 'menu' | 'shapes' | 'letters';
