import { connect } from "react-redux";
import { IStore } from "../store";
import TyposView from "./Views/TyposIndicator";

const mapState = ({ typos }: IStore) => {
  return { typos: typos.size };
};

const Typos = connect(mapState)(TyposView);

export default Typos;
