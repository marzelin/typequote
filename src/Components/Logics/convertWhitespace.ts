export default (char: string): [string, boolean] =>
  char === " " ? ["_", true] : [char, false];
