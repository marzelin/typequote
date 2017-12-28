import * as React from "react";
import styled from "react-emotion";
import NewQuoteButton from "../NewQuoteButton";
import PlayButton from "../PlayButton";

const Container = styled("div")`
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

const ButtonGroup = () => (
  <Container>
    <PlayButton />
    <Or />
    <NewQuoteButton />
  </Container>
);

export default ButtonGroup;
