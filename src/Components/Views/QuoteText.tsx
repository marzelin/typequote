import * as React from "react";

interface IParams {
  chars: JSX.Element[];
}

const Chars = ({ chars }: IParams) => <q>{chars}</q>;

export default Chars;
