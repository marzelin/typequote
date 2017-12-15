import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

interface Iaction {
  type: string;
  payload?: any;
}

const isPlayingReducer = (state = false, action: Iaction) => {
  switch (action.type) {
    case "typingStarted":
      return true;
    case "typingEnded":
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

const textReducer = () => {
  return `We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.`;
};

const rootReducer = combineReducers<IStore>({
  current: currentReducer,
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
  isPlaying: boolean;
  startTime: number;
  text: string;
  typos: Set<number>;
}

export default () => {
  return createStore<IStore>(rootReducer, enhancer);
};
