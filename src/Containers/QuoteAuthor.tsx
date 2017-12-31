import { IStoreState } from "@state/store";

import AuthorView from "@Views/QuoteAuthor";

import * as React from "react";
import { connect } from "react-redux";

interface IParams {
  isCompleted: boolean;
  author: string;
}

const mapState = ({ isCompleted, quote: [, author] }: IStoreState) => ({
  author,
  isCompleted
});

const Author = ({ isCompleted, author }: IParams) => (
  <AuthorView isConcealed={!isCompleted}>{author}</AuthorView>
);

export default connect(mapState)(Author);
