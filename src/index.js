import { createRoot } from "react-dom/client";
import AntdConfig from "./AntdConfig/AntdConfig";
import BaseLayouts from "./layouts/BaseLayouts";
//import DefaultLayout from "./layout/DefaultLayout"
let root = createRoot(document.getElementById("root"));

root.render(
  <AntdConfig>
    <BaseLayouts />
  </AntdConfig>
);

// root.render(
//   <DefaultLayout>
//     <BaseLayouts />
//   </DefaultLayout>
// );

