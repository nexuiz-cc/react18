import React from "react";
import { createRoot } from "react-dom/client";
import RouterConfig from "./routes/RouterConfig";
// import LearnRouter from "./layout/LearnRouter";
let root = createRoot(document.getElementById("root"));

root.render(
  <RouterConfig></RouterConfig>
);
