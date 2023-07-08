import React from "react";
import { createRoot } from "react-dom/client";
import Routerr from "./layout/Routerr";
let root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <Routerr />
  </React.StrictMode>
);
