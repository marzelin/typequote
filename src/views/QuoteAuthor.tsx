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
  box-sizing: border-box;
  /* padding needed so that the italicized text won't stick out of the cover */
  padding-right: 10px;
  ${({ isConcealed }) => isConcealed && concealStyle};
`;

const concealStyle = `
:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ddd;
  color: #fff;
  box-sizing: border-box;
  padding: 5px 10px 0;
  content: "type quote to reveal the author";
  display: block;
  border-radius: 3px;
  font-size: 18px;
}`;

export default Author;
