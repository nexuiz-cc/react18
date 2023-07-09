import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layout/Layout";
let root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <Layout />
  </React.StrictMode>
);
