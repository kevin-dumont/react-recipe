import { hydrate } from "react-dom";

import App from "./lib";
import stories from "./stories";
import React from "react";

hydrate(<App stories={stories} />, document.getElementById("app"));
