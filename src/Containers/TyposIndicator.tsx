import { IStoreState } from "@state/store";

import TyposView from "@Views/TyposIndicator";

import { connect } from "react-redux";

const mapState = ({ typos }: IStoreState) => {
  return { typos: typos.length };
};

const Typos = connect(mapState)(TyposView);

export default Typos;
