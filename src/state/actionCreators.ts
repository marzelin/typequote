import { Idispatch, TgetState } from "redux";
import Action from "./actions";

export const checkIfCorrect = (char: string) => (
  dispatch: Idispatch,
  getState: TgetState
) => {
  const { current, quote: [text] } = getState();

  if (text[current] === char) {
    dispatch(inputCorrect);
    if (current === text.length - 1) {
      dispatch(typingCompleted);
    }
  } else {
    dispatch(inputIncorrect(current));
  }
};

export const startTyping: AC = () => ({ type: "TYPING_STARTED" });
export const newQuote: AC = () => ({ type: "NEW_QUOTE" });

const typingCompleted: Action = { type: "TYPING_COMPLETED" };
const inputCorrect: Action = { type: "INPUT_CORRECT" };

const inputIncorrect: AC1<number> = index => ({
  payload: index,
  type: "INPUT_INCORRECT"
});

type AC = () => Action;
type AC1<T> = (arg: T) => Action;
