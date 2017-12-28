import { keyframes } from "emotion";
import styled from "react-emotion";

const blink = keyframes`
0%, 40% {
border-bottom: 3px solid black;
}
50%, 100% {
  border-bottom: 3px solid transparent;
}
`;

interface IParams {
  current: boolean;
  typo: boolean;
  completed: boolean;
  lift: boolean;
}

export default styled<IParams, "span">("span")(
  {
    borderBottom: "3px solid transparent",
    lineHeight: 1.5,
    marginRight: "5px"
  },
  ({ current }) => current && { animation: `${blink} infinite .7s` },
  ({ lift }) =>
    lift && {
      boxSizing: "border-box",
      color: "#eee",
      display: "inline-block",
      fontWeight: "bold",
      position: "relative",
      top: "-5px"
    },
  ({ completed, lift }) =>
    completed && { color: lift ? "transparent" : "black" },
  ({ typo }) => typo && { color: "tomato" }
);
