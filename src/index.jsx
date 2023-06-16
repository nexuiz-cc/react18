import { createRoot } from "react-dom/client";
import BaseLayouts from "./layouts/BaseLayouts";
// import "./assets/css/index.css"; //引入全局主题
import "./assets/less/index.less"; //引入全局主题

import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import { ConfigProvider } from "antd";

moment.locale("zh-cn");

let root = createRoot(document.getElementById("root"));

root.render(
  <ConfigProvider locale={zhCN}>
    <BaseLayouts />
  </ConfigProvider>
);
