import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import quotes from "./quotes";

interface Iaction {
  type: string;
  payload?: any;
}

const isPlayingReducer = (state = false, action: Iaction) => {
  switch (action.type) {
    case "typingStarted":
      return true;
    case "typingEnded":
    case "newQuote":
      return false;
    default:
      return state;
  }
};

const typosReducer = (state = new Set(), action: Iaction) => {
  switch (action.type) {
    case "inputIncorrect":
      state = new Set(state);
      state.add(action.payload);
      return state;
    case "typingStarted":
    case "newQuote":
      return new Set();
    default:
      return state;
  }
};

const currentReducer = (state = 0, action: Iaction) => {
  switch (action.type) {
    case "inputCorrect":
      return state + 1;
    case "typingStarted":
    case "newQuote":
      return 0;
    default:
      return state;
  }
};

const startTimeReducer = (state = null, action: Iaction) => {
  switch (action.type) {
    case "typingStarted":
      return Date.now();
    default:
      return state;
  }
};

const random = (range: number) => Math.floor(Math.random() * range);

const textReducer = (
  state = quotes[random(quotes.length)],
  action: Iaction
) => {
  switch (action.type) {
    case "newQuote":
      let newQuote: typeof state;
      do {
        newQuote = quotes[random(quotes.length)];
      } while (newQuote[0] === state[0]);
      return newQuote;
    default:
      return state;
  }
};

const isCompletedReducer = (state = false, action: Iaction) => {
  switch (action.type) {
    case "typingStarted":
    case "newQuote":
      return false;
    case "typingEnded":
      return true;
    default:
      return state;
  }
};

const rootReducer = combineReducers<IStore>({
  current: currentReducer,
  isCompleted: isCompletedReducer,
  isPlaying: isPlayingReducer,
  startTime: startTimeReducer,
  text: textReducer,
  typos: typosReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) as typeof compose)
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export interface IStore {
  current: number;
  isCompleted: boolean;
  isPlaying: boolean;
  startTime: number;
  text: string[];
  typos: Set<number>;
}

export default () => {
  return createStore<IStore>(rootReducer, enhancer);
};
