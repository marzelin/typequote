import Author from "@Containers/QuoteAuthor";
import Text from "@Containers/QuoteText";

import QuoteBoxView from "@Views/QuoteBox";

import * as React from "react";

const QuoteBox = () => (
  <QuoteBoxView>
    <Text />
    <Author />
  </QuoteBoxView>
);

export default QuoteBox;
