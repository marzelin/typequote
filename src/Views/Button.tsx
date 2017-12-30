import styled from "react-emotion";

const Button = styled("button")`
  color: #fff;
  width: 100%;
  box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.15);
  margin: 0;
  font-size: 1.42857143rem;
  cursor: pointer;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease;

  :hover {
    background-color: #eaae00;
  }

  :active {
    background-color: #cd9903;
  }
`;

export const ButtonLeft = styled(Button)`
  border-radius: 0.28571429rem 0 0 0.28571429rem;
  background-color: #fbbd08;
  :hover {
    background-color: #eaae00;
  }

  :active {
    background-color: #cd9903;
  }
`;

export const ButtonRight = styled(Button)`
  border-radius: 0 0.28571429rem 0.28571429rem 0;
  background-color: #f2711c;
  :hover {
    background-color: #f26202;
  }

  :active {
    background-color: #cf590c;
  }
`;
