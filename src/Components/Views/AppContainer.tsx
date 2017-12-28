import styled from "react-emotion";

const Container = styled("div")`
  margin-left: 1em;
  margin-right: 1em;
  @media only screen and (min-width: 768px) {
    width: 723px;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 992px) {
    width: 933px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1127px;
  }
`;

export default Container;
