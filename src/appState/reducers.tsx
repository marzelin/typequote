import { combineReducers, Reducer } from "redux";
import Action from "./actions";
import quotes from "./quotes";
import { IStoreState } from "./store";

const initialState: IStoreState = {
  current: 0,
  isCompleted: false,
  isPlaying: false,
  quote: quotes[random(quotes.length)],
  startTime: null,
  typos: new Set()
};

const current: Reducer<IStoreState["current"]> = (
  state = initialState.current,
  action: Action
) => {
  switch (action.type) {
    case "INPUT_CORRECT":
      return state + 1;
    case "TYPING_STARTED":
    case "NEW_QUOTE":
      return 0;
    default:
      return state;
  }
};

const isCompleted: Reducer<IStoreState["isCompleted"]> = (
  state = initialState.isCompleted,
  action: Action
) => {
  switch (action.type) {
    case "TYPING_STARTED":
    case "NEW_QUOTE":
      return false;
    case "TYPING_COMPLETED":
      return true;
    default:
      return state;
  }
};

const isPlaying: Reducer<IStoreState["isPlaying"]> = (
  state = initialState.isPlaying,
  action: Action
) => {
  switch (action.type) {
    case "TYPING_STARTED":
      return true;
    case "TYPING_COMPLETED":
    case "NEW_QUOTE":
      return false;
    default:
      return state;
  }
};

const quote: Reducer<IStoreState["quote"]> = (
  state = initialState.quote,
  action: Action
) => {
  switch (action.type) {
    case "NEW_QUOTE":
      let newQuote: typeof state;
      do {
        newQuote = quotes[random(quotes.length)];
      } while (newQuote[0] === state[0]);
      return newQuote;
    default:
      return state;
  }
};

const startTime: Reducer<IStoreState["startTime"]> = (
  state = initialState.startTime,
  action: Action
) => {
  switch (action.type) {
    case "TYPING_STARTED":
      return Date.now();
    default:
      return state;
  }
};

const typos: Reducer<IStoreState["typos"]> = (
  state = initialState.typos,
  action: Action
) => {
  switch (action.type) {
    case "INPUT_INCORRECT":
      state = new Set(state);
      state.add(action.payload);
      return state;
    case "TYPING_STARTED":
    case "NEW_QUOTE":
      return new Set();
    default:
      return state;
  }
};

function random(range: number) {
  return Math.floor(Math.random() * range);
}

const rootReducer = combineReducers<IStoreState, Action>({
  current,
  isCompleted,
  isPlaying,
  quote,
  startTime,
  typos
});

export default rootReducer;
