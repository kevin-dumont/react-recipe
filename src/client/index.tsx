import * as React from "react";
import { hydrate } from "react-dom";

import App from "./lib";
import stories from "./stories";

hydrate(<App stories={stories} />, document.getElementById("app"));
