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

export default styled<
  { current: boolean; typo: boolean; completed: boolean; lift: boolean },
  "span"
>("span")(
  {
    borderBottom: "3px solid transparent",
    lineHeight: 1.5,
    marginRight: "5px"
  },
  ({ current }) => current && { animation: `${blink} infinite .7s` },
  ({ lift }) =>
    lift &&
    `display: inline-block;
  position: relative;
  top: -5px;
  color: #eee;
  box-sizing: border-box;
  font-weight: bold;`,
  ({ completed, lift }) =>
    completed && { color: lift ? "transparent" : "black" },
  ({ typo }) => typo && { color: "tomato" }
);
