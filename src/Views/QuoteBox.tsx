import styled from "react-emotion";

const pseudoElementsStyles = `
    background-color: #fff;
    visibility: visible;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
    border: 1px solid rgba(34, 36, 38, 0.15);
    box-sizing: border-box;
    top: 0;
`;

const Container = styled("div")`
  font-size: 30px;
  font-family: monospace;
  color: gray;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  padding: 1em 1em;
  border-radius: 0.28571429rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  margin-bottom: 3rem;

  :before {
    transform: rotate(-1.2deg);
    z-index: -2;
    ${pseudoElementsStyles};
  }

  :after {
    transform: rotate(1.2deg);
    z-index: -1;
    ${pseudoElementsStyles};
  }
`;

export default Container;
