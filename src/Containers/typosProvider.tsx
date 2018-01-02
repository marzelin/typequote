import { IStoreState } from "@state/store";

import { connect } from "react-redux";

const mapState = ({ typos }: IStoreState): { children: React.ReactNode } => {
  return { children: typos.length };
};

export default connect(mapState);
