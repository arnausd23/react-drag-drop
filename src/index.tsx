import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

import store from "./left-sidebar/store";
import "./theme/theme.scss";

import { AddScreenContainer } from "./left-sidebar/containers";

ReactDOM.render(
  <Provider store={store}>
    <AddScreenContainer />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
