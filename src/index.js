import React from "react";
import { render } from "react-dom";
import ReactDom from "react-dom";

import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));

module.hot.accept();
