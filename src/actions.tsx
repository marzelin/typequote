interface ITypingStarted {
  type: "TYPING_STARTED";
}

interface ITypingCompleted {
  type: "TYPING_COMPLETED";
}

interface INewQuote {
  type: "NEW_QUOTE";
}

interface IInputIncorrect {
  type: "INPUT_INCORRECT";
  payload: number;
}

interface IInputCorrect {
  type: "INPUT_CORRECT";
}

type Action =
  | ITypingStarted
  | ITypingCompleted
  | INewQuote
  | IInputCorrect
  | IInputIncorrect;

export default Action;
