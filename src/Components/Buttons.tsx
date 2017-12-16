import * as React from "react";
import styled from "react-emotion";
import { connect } from "react-redux";
import { newQuote, startTyping } from "../actionCreators";
import { IStore } from "../store";

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

const ButtonLeft = styled(Button)`
  border-radius: 0.28571429rem 0 0 0.28571429rem;
  background-color: #fbbd08;
  :hover {
    background-color: #eaae00;
  }

  :active {
    background-color: #cd9903;
  }
`;

const ButtonRight = styled(Button)`
  border-radius: 0 0.28571429rem 0.28571429rem 0;
  background-color: #f2711c;
  :hover {
    background-color: #f26202;
  }

  :active {
    background-color: #cf590c;
  }
`;

const Buttons = styled("div")`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  font-size: 0;
  vertical-align: baseline;
  margin: 0 0.25em 0 0;
`;

const Or = styled("div")`
  width: 0;
  position: relative;
  height: 2.57142857em;
  font-size: 1.42857143rem;
  z-index: 3;
  :before {
    position: absolute;
    text-align: center;
    border-radius: 500rem;
    content: "or";
    top: 50%;
    left: 50%;
    background-color: #fff;
    text-shadow: none;
    margin-top: -0.89285714em;
    margin-left: -0.89285714em;
    width: 1.78571429em;
    height: 1.78571429em;
    line-height: 1.78571429em;
    color: rgba(0, 0, 0, 0.4);
    font-style: normal;
    font-weight: 700;
    box-shadow: 0 0 0 1px transparent inset;
  }
`;

const mapDispatchToProps = {
  onClick: startTyping
};

const mapStateToProps = ({ isPlaying }: IStore) => ({
  isPlaying
});

const PlayButton = connect(mapStateToProps, mapDispatchToProps)(
  ({ isPlaying, onClick }) => (
    <ButtonLeft onClick={onClick}>
      {isPlaying ? "Restart" : "Start Typing"}
    </ButtonLeft>
  )
);

const mapDispatch = {
  onClick: newQuote
};

const NewQuoteButton = connect(null, mapDispatch)(({ onClick }) => (
  <ButtonRight onClick={onClick}>New Quote</ButtonRight>
));

export default () => (
  <Buttons>
    <PlayButton />
    <Or />
    <NewQuoteButton />
  </Buttons>
);
