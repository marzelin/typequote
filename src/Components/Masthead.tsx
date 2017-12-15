import * as React from "react";
import styled from "react-emotion";

const Container = styled("div")`
  background: #1b1c1d;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Title = styled("h1")`
  font-size: 2rem;
  color: #fff;
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

const Subtitle = styled("h2")`
  font-size: 1.71428571rem;
  font-weight: 700;
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  color: rgba(255, 255, 255, 0.9);
`;

export default () => (
  <Container>
    <Title>TypeSpeed</Title>
    <Subtitle>How Fast Can You Type?</Subtitle>
  </Container>
);
