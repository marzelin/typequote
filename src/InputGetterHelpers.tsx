type Event = React.SyntheticEvent<HTMLTextAreaElement>;
export type Fn = () => void;

const Enter = "\n";

export function refocusEl({ currentTarget: el }: Event) {
  el.focus();
}

export function passTypedChar(pass: (char: string) => void) {
  return ({ currentTarget: el }: Event) => {
    pass(el.value);
    empty(el);
  };
}

export function listenForShortcuts(onEnter: Fn, onN: Fn) {
  return ({ currentTarget: el }: Event) => {
    const { value } = el;

    if (value === Enter) {
      onEnter();
    } else if (value === "n") {
      onN();
    }
    empty(el);
  };
}

function empty(input: HTMLTextAreaElement) {
  input.value = "";
}
