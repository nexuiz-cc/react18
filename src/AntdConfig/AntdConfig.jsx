import "./index.less"; //引入全局主题
import React from "react";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import { ConfigProvider } from "antd";

moment.locale("zh-cn");

const AntdConfig = ({ children }) => {
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>;
};

export default AntdConfig;
