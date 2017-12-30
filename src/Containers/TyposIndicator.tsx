import { IStoreState } from "@appState/store";

import TyposView from "@Views/TyposIndicator";

import { connect } from "react-redux";

const mapState = ({ typos }: IStoreState) => {
  return { typos: typos.size };
};

const Typos = connect(mapState)(TyposView);

export default Typos;
