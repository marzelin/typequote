import styled from "react-emotion";

interface IParams {
  isConcealed: boolean;
}

const Author = styled<IParams, "cite">("cite")`
  display: block;
  position: relative;
  text-align: right;
  margin-top: 10px;
  width: 100%;
  ${({ isConcealed }) =>
    isConcealed &&
    `
    :after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #ddd;
      color: #fff;
      box-sizing: border-box;
      padding: 0 10px;
      content: "type quote to reveal the author";
      display: block;
    }
  `};
`;

export default Author;
