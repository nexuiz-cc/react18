import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AntdMobileConfig from "./AntdMobileConfig";

let root = createRoot(document.getElementById("root"));

root.render(
  <AntdMobileConfig>
    <App />
  </AntdMobileConfig>
);
