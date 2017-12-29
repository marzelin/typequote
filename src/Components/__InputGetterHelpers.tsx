type Event = React.SyntheticEvent<HTMLTextAreaElement>;
export type Fn = () => void;
const Enter = "\n";

export function focusEl({ currentTarget: el }: Event) {
  el.focus();
}

export function passInputValue(onChar: (char: string) => void) {
  return ({ currentTarget: el }: Event) => {
    onChar(el.value);
    el.value = "";
  };
}

function callIfMatchChar(onEnter: Fn, onN: Fn) {
  return (value: string) => {
    switch (value) {
      case Enter:
        onEnter();
        break;
      case "n":
        onN();
        break;
    }
  };
}

export function callIfInputMatch(onEnter: Fn, onN: Fn) {
  return passInputValue(callIfMatchChar(onEnter, onN));
}
