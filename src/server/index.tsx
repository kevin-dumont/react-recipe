import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import stories from "../client/stories";
import App from "../client/lib";
import html from "./html";

const port = 3000;
const server = express();

server.use(express.static("dist"));
server.get("/", (req, res) => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(sheet.collectStyles(<App stories={stories} />)) + sheet.getStyleTags();

  res.send(html({ body }));
});

server.listen(port, () => console.log("🚀  Storeact is listening on url http://localhost:3000 !"));
