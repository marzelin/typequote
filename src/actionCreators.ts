import { IStore } from "./store";
export const handleInput = (char: string) => (
  dispatch: (action: { type: string; payload?: number | string }) => void,
  getState: () => IStore
) => {
  const { current, text: [text] } = getState();
  if (text[current] === char) {
    dispatch({
      payload: current + 1,
      type: "inputCorrect"
    });
    if (current + 1 === text.length) {
      dispatch({
        type: "typingEnded"
      });
    }
  } else {
    dispatch({
      payload: current,
      type: "inputIncorrect"
    });
  }
};

export const startTyping = () => ({ type: "typingStarted" });

export const newQuote = () => ({ type: "newQuote" });
