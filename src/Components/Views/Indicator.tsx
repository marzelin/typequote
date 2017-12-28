import styled from "react-emotion";

export const IndicatorContainer = styled("div")`
  min-width: 50%;
  margin: 0 0 2em;
  display: inline-flex;
  flex: 0 1 auto;
  flex-direction: column;
`;

export const Value = styled("div")`
  font-size: 4rem;
  font-weight: 400;
  line-height: 1em;
  color: #1b1c1d;
  text-transform: uppercase;
  text-align: center;
`;

export const Label = styled("div")`
  font-size: 1em;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  text-align: center;
`;
