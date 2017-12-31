import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) as typeof compose)
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

type QuoteText = string;
type QuoteAuthor = string;

export interface IStoreState {
  readonly current: number;
  readonly isCompleted: boolean;
  readonly isPlaying: boolean;
  readonly startTime: number | null;
  readonly quote: [QuoteText, QuoteAuthor];
  readonly typos: number[];
}

export default () => {
  return createStore<IStoreState>(reducer, enhancer);
};
