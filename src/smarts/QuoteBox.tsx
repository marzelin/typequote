import Author from "@smarts/QuoteAuthor";
import Text from "@smarts/QuoteText";

import QuoteBoxView from "@views/QuoteBox";

import * as React from "react";

const QuoteBox = () => (
  <QuoteBoxView>
    <Text />
    <Author />
  </QuoteBoxView>
);

export default QuoteBox;
