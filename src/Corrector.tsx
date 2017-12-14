export default ({
  char,
  render
}: {
  char: string;
  render: (char: string, lift: boolean) => JSX.Element;
}) => {
  let lift = false;
  if (char === " ") {
    char = "_";
    lift = true;
  }
  return render(char, lift);
};
