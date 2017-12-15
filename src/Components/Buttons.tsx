import * as React from "react";
import styled from "react-emotion";
import { connect } from "react-redux";
import { startTyping } from "../actionCreators";

const Button = styled("button")`
  border-radius: 0 0 0.28571429rem 0.28571429rem;
  background-color: #fbbd08;
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
    color: #fff;
    text-shadow: none;
  }

  :active {
    background-color: #cd9903;
    color: #fff;
    text-shadow: none;
  }
`;

const mapDispatchToProps = {
  onClick: startTyping
};

export default connect(null, mapDispatchToProps)(props => (
  <Button {...props}>Start Typing</Button>
));
