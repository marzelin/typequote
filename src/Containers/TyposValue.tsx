import { IStoreState } from "@state/store";

import { Value } from "@Views/Indicator";

import * as React from "react";
import { connect } from "react-redux";

const mapState = ({ typos }: IStoreState) => {
  return { typos: typos.length };
};

interface IParams {
  typos: number;
}

const TyposValue = ({ typos }: IParams) => <Value>{typos}</Value>;

export default connect(mapState)(TyposValue);
