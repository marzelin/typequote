import { connect } from "react-redux";
import { IStoreState } from "../store";
import TyposView from "./Views/TyposIndicator";

const mapState = ({ typos }: IStoreState) => {
  return { typos: typos.size };
};

const Typos = connect(mapState)(TyposView);

export default Typos;
