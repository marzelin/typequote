import * as React from "react";
import { connect } from "react-redux";
import { IStoreState } from "../store";
import AuthorView from "./Views/QuoteAuthor";

interface IParams {
  isCompleted: boolean;
  author: string;
}

const mapState = ({ isCompleted, text: [, author] }: IStoreState) => ({
  author,
  isCompleted
});

const Author = ({ isCompleted, author }: IParams) => (
  <AuthorView isConcealed={!isCompleted}>{author}</AuthorView>
);

export default connect(mapState)(Author);
