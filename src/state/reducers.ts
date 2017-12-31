import { addIfUnique, chooseDifferentItem } from "@helpers/quoteHelpers";
import Action from "@state/actions";
import quotes from "@state/quotes";
import { IStoreState } from "@state/store";
import { combineReducers, Reducer } from "redux";

const chooseDifferent = chooseDifferentItem(quotes);
const getQuote = () => chooseDifferent(null);

const initialState: IStoreState = {
  current: 0,
  isCompleted: false,
  isPlaying: false,
  quote: getQuote(),
  startTime: null,
  typos: []
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
      return chooseDifferent(state);
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
    case "NEW_QUOTE":
      return initialState.startTime;
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
      // we want to show only one typo for a given quote char
      // because it's common to type a few characters before noticing a typo
      return addIfUnique(state, action.payload);
    case "TYPING_STARTED":
    case "NEW_QUOTE":
      return initialState.typos;
    default:
      return state;
  }
};

const rootReducer = combineReducers<IStoreState, Action>({
  current,
  isCompleted,
  isPlaying,
  quote,
  startTime,
  typos
});

export default rootReducer;
