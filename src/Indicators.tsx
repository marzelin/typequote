import * as React from "react";
import styled from "react-emotion";

const Container = styled("div")`
  margin: 5em 0em 3em;
  display: flex;
`;

const Box = styled("div")`
  min-width: 50%;
  margin: 0 0 2em;
  display: inline-flex;
  flex: 0 1 auto;
  flex-direction: column;
`;

const Value = styled("div")`
  font-size: 4rem;
  font-weight: 400;
  line-height: 1em;
  color: #1b1c1d;
  text-transform: uppercase;
  text-align: center;
`;

const Label = styled("div")`
  font-size: 1em;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  text-align: center;
`;

export default () => (
  <Container>
    <Box>
      <Value>0</Value>
      <Label>TYPOS</Label>
    </Box>
    <Box>
      <Value>65</Value>
      <Label>WORDS PER MINUTE</Label>
    </Box>
  </Container>
);
